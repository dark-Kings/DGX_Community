import express from 'express';
import { body, validationResult } from 'express-validator';
import { connectToDatabase, closeConnection } from '../database/mySql.js';
import dotenv from 'dotenv';
import { queryAsync, logError, logInfo, logWarning } from '../helper/index.js';

dotenv.config();

const router = express.Router();

// POST: Add a new event
router.post('/add', [
    body('eventTitle').notEmpty().withMessage('Event title is required'),
    body('startDate').isDate().withMessage('Valid start date is required'),
    body('endDate').isDate().withMessage('Valid end date is required'),
    body('eventType').notEmpty().withMessage('Event type is required'),
    body('venue').notEmpty().withMessage('Venue is required'),
    body('host').notEmpty().withMessage('Host is required'),
    body('registrationLink').optional().isURL().withMessage('Valid registration link is required'),
    body('eventDescription').optional().isString(),
], async (req, res) => {
    let success = false;
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const warningMessage = "Data is not in the right format";
        logWarning(warningMessage);
        return res.status(400).json({ success, data: errors.array(), message: warningMessage });
    }

    try {
        const { eventTitle, startDate, endDate, eventType, venue, host, registrationLink, eventDescription } = req.body;

        connectToDatabase(async (err, conn) => {
            if (err) {
                const errorMessage = "Failed to connect to database";
                logError(err);
                return res.status(500).json({ success: false, data: err, message: errorMessage });
            }

            try {
                const query = `
                    INSERT INTO Community_Event 
                    (EventTitle, StartDate, EndDate, EventType, Venue, Host, RegistrationLink, EventDescription, AddOnDt, delStatus) 
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, GETDATE(), 0);
                `;
                await queryAsync(conn, query, [eventTitle, startDate, endDate, eventType, venue, host, registrationLink, eventDescription]);
                
                success = true;
                const infoMessage = "Event added successfully";
                logInfo(infoMessage);
                res.status(200).json({ success, message: infoMessage });
            } catch (queryErr) {
                logError(queryErr);
                res.status(500).json({ success: false, data: queryErr, message: 'Something went wrong, please try again' });
            } finally {
                closeConnection(); // Ensure connection is closed
            }
        });
    } catch (error) {
        logError(error);
        res.status(500).json({ success: false, data: {}, message: 'Something went wrong, please try again' });
    }
});

// GET: Retrieve events
router.get('/get', async (req, res) => {
    let success = false;

    try {
        connectToDatabase(async (err, conn) => {
            if (err) {
                const errorMessage = "Failed to connect to database";
                logError(err);
                return res.status(500).json({ success: false, data: err, message: errorMessage });
            }

            try {
                const query = `
                    SELECT EventID, EventTitle, StartDate, EndDate, EventType, Venue, Host, RegistrationLink, EventDescription, AddOnDt 
                    FROM Community_Event 
                    WHERE ISNULL(delStatus, 0) = 0 
                    ORDER BY StartDate DESC;
                `;
                const events = await queryAsync(conn, query);

                success = true;
                logInfo("Events retrieved successfully");
                res.status(200).json({ success, data: events, message: "Events retrieved successfully" });
            } catch (queryErr) {
                logError(queryErr);
                res.status(500).json({ success: false, data: queryErr, message: 'Something went wrong, please try again' });
            } finally {
                closeConnection(); // Ensure connection is closed
            }
        });
    } catch (error) {
        logError(error);
        res.status(500).json({ success: false, data: {}, message: 'Something went wrong, please try again' });
    }
});

export default router;
