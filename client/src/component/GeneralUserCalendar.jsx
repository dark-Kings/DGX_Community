import React, { useState, useEffect } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Skeleton from 'react-loading-skeleton'; // Import Skeleton
import 'react-loading-skeleton/dist/skeleton.css'; // Import Skeleton styles
import { images } from '../constant/index.js'; // Make sure images are available

const localizer = momentLocalizer(moment);

const eventColors = {
  workshop: '#013D54', // DGXblue
  event: '#76B900',    // DGXgreen
};

// Dummy data
const dummyEvents = [
  {
    title: 'Fireside Chat With NVIDIA CEO Jensen Huang',
    start: new Date(),
    end: new Date(new Date().getTime() + 3600000), // 1 hour later
    category: 'workshop',
    venue: 'Conference Room A',
    description: '<p>Join us for a comprehensive workshop on AI and machine learning.</p>',
    host: 'Dr. John Doe',
    poster: images.Event4,
    registerLink: 'https://www.nvidia.com/en-us/events/siggraph/'
  },
  {
    title: 'AI and the Next Computing Platforms With Jensen Huang and Mark Zuckerberg',
    start: new Date(new Date().getTime() + 86400000), // 1 day later
    end: new Date(new Date().getTime() + 86400000 + 3600000), // 1 hour later
    category: 'event',
    venue: 'Auditorium B',
    description: '<p>Hear from leading experts about the future of artificial intelligence.</p>',
    host: 'Jane Smith',
    poster: images.Event2,
    registerLink: 'https://www.nvidia.com/en-us/events/siggraph/#featured-programsr'
  },
];

const GeneralUserCalendar = ({ events = dummyEvents }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulating data fetching
    const loadEvents = async () => {
      setIsLoading(true);
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };
    
    loadEvents();
  }, []);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    document.getElementById('event-detail').scrollIntoView({ behavior: 'smooth' });
  };

  const eventStyleGetter = (event) => {
    const backgroundColor = eventColors[event.category] || '#C0C0C0'; // Default color
    return {
      style: {
        backgroundColor,
        color: 'white',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        fontSize: '0.85rem',
        padding: '0.5rem',
      },
    };
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="mb-5">
        <h1 className="text-2xl font-bold mb-4">Our Event and Workshop Calendar</h1>
      </div>

      {isLoading ? (
        <Skeleton height={600} className="bg-gray-200 rounded-lg mb-10" />
      ) : (
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
          className="bg-white rounded-lg border-2 border-DGXgreen shadow-lg p-5 mb-10"
          eventPropGetter={eventStyleGetter}
          onSelectEvent={handleSelectEvent}
        />
      )}

      {selectedEvent && (
        <div id="event-detail" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-5 max-w-3xl w-full max-h-[90vh] overflow-y-auto z-50">
            <h2 className="text-4xl font-bold mb-10 flex justify-center">Event Details</h2>
            <div className="mb-4">
              <strong className='text-xl underline'>Title:</strong> <span>{selectedEvent.title}</span>
            </div>
            <div className="mb-4">
              <strong className='text-xl underline'>Date & Time:</strong> <span>{moment(selectedEvent.start).format('MMMM D, YYYY h:mm A')} - {moment(selectedEvent.end).format('MMMM D, YYYY h:mm A')}</span>
            </div>
            <div className="mb-4">
              <strong className='text-xl underline'>Category:</strong> <span>{selectedEvent.category}</span>
            </div>
            <div className="mb-4">
              <strong className='text-xl underline'>Venue:</strong> <span>{selectedEvent.venue}</span>
            </div>
            <div className="mb-4">
              <strong className='text-xl underline'>Description:</strong> <div className='mt-4' dangerouslySetInnerHTML={{ __html: selectedEvent.description }} />
            </div>
            <div className="mb-4">
              <strong className='text-xl underline'>Host:</strong> <span>{selectedEvent.host}</span>
            </div>
            {selectedEvent.poster && (
              <img src={selectedEvent.poster} alt="Event Poster" className="mb-4 w-full max-w-3xl object-cover" />
            )}
            <div className="flex justify-center gap-4 mt-4">
              {selectedEvent.registerLink && (
                <a
                  href={selectedEvent.registerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-DGXblue text-white p-2 rounded"
                >
                  Register Here
                </a>
              )}
              <button
                onClick={() => setSelectedEvent(null)}
                className="bg-DGXblue text-white p-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeneralUserCalendar;
