import React, { useState, useRef } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { images } from '../constant/index.js';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import styles for ReactQuill

const localizer = momentLocalizer(moment);

const eventColors = {
  workshop: '#013D54', // DGXblue
  event: '#76B900',    // DGXgreen
};

const Calendar = () => {
  const [events, setEvents] = useState([
    {
      title: 'Workshop on DGX H100',
      start: new Date(2024, 6, 26, 10, 0),
      end: new Date(2024, 6, 26, 12, 0),
      category: 'workshop',
      poster: images.Event1, // Add poster URL
      venue: 'Room 101',
      description: '<p>An in-depth workshop on DGX H100 technology.</p>',
      host: 'John Doe',
      registerLink: 'https://example.com/register', // Add register link here
    },
    {
      title: 'DGX Server Maintenance',
      start: new Date(2024, 6, 27, 14, 0),
      end: new Date(2024, 6, 27, 16, 0),
      category: 'event',
      poster: images.Event5, // Add poster URL
      venue: 'Server Room',
      description: '<p>Scheduled maintenance for DGX servers.</p>',
      host: 'Jane Smith',
      registerLink: '', // Empty if no registration link
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: '',
    category: 'Select one',
    poster: null,
    venue: '',
    description: '',
    host: '',
    registerLink: '', // Add registerLink to state
  });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  // Create refs for input fields
  const titleRef = useRef(null);
  const startRef = useRef(null);
  const endRef = useRef(null);
  const categoryRef = useRef(null);
  const venueRef = useRef(null);
  const hostRef = useRef(null);
  const descriptionRef = useRef(null);
  const registerLinkRef = useRef(null); // Add ref for register link

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewEvent({ ...newEvent, poster: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleDescriptionChange = (value) => {
    setNewEvent({ ...newEvent, description: value });
  };

  const handleSubmit = () => {
    const errors = {};

    if (!newEvent.title) errors.title = 'Event title is required.';
    if (!newEvent.start) errors.start = 'Start date is required.';
    if (!newEvent.end) errors.end = 'End date is required.';
    if (newEvent.category === 'Select one') errors.category = 'Please select a category.';
    if (!newEvent.venue) errors.venue = 'Venue is required.';
    if (!newEvent.description) errors.description = 'Description is required.';
    if (!newEvent.host) errors.host = 'Host is required.';

    if (Object.keys(errors).length > 0) {
      setErrors(errors);

      // Focus on the first input with an error
      const firstErrorField = Object.keys(errors)[0];
      const refMap = {
        title: titleRef,
        start: startRef,
        end: endRef,
        category: categoryRef,
        venue: venueRef,
        host: hostRef,
        description: descriptionRef,
        registerLink: registerLinkRef, // Add ref for register link
      };
      const element = refMap[firstErrorField].current;
      if (element) {
        element.focus();
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      return;
    }

    setEvents([
      ...events,
      {
        ...newEvent,
        start: new Date(newEvent.start),
        end: new Date(newEvent.end),
      },
    ]);

    resetForm();
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    resetForm();
    setIsModalOpen(false);
  };

  const resetForm = () => {
    setNewEvent({
      title: '',
      start: '',
      end: '',
      category: 'Select one',
      poster: null,
      venue: '',
      description: '',
      host: '',
      registerLink: '', // Reset registerLink
    });
    setErrors({});
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Clear the file input
    }
  };

  const handleSelectEvent = (event) => {
	console.log('Events Data:', events);
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
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-DGXgreen text-white p-2 rounded"
        >
          Add Event
        </button>
      </div>
      <div className={`transition-opacity ${isModalOpen ? 'pointer-events-none opacity-50' : ''}`}>
	  <BigCalendar
		localizer={localizer}
		events={events}
		startAccessor="start"
		endAccessor="end"
		style={{ height: 600, zIndex: 1 }} // Ensure calendar is behind the modal
		className="bg-white rounded-lg shadow-lg p-5"
		eventPropGetter={eventStyleGetter}
		onSelectEvent={handleSelectEvent}
		/>


      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-5 max-w-7xl w-full max-h-[90vh] overflow-y-auto z-50">
            <h2 className="text-xl font-bold mb-4">Add New Event</h2>
            <input
              type="text"
              name="title"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={handleChange}
              className={`p-2 border border-gray-300 rounded mb-2 w-full ${errors.title ? 'border-red-500' : ''}`}
              ref={titleRef}
            />
            {errors.title && <p className="text-red-500 text-sm mb-2">{errors.title}</p>}
            
            <input
              type="datetime-local"
              name="start"
              placeholder="Start Date"
              value={newEvent.start}
              onChange={handleChange}
              className={`p-2 border border-gray-300 rounded mb-2 w-full ${errors.start ? 'border-red-500' : ''}`}
              ref={startRef}
            />
            {errors.start && <p className="text-red-500 text-sm mb-2">{errors.start}</p>}
            
            <input
              type="datetime-local"
              name="end"
              placeholder="End Date"
              value={newEvent.end}
              onChange={handleChange}
              className={`p-2 border border-gray-300 rounded mb-2 w-full ${errors.end ? 'border-red-500' : ''}`}
              ref={endRef}
            />
            {errors.end && <p className="text-red-500 text-sm mb-2">{errors.end}</p>}
            
            <select
              name="category"
              value={newEvent.category}
              onChange={handleChange}
              className={`p-2 border border-gray-300 rounded mb-2 w-full ${errors.category ? 'border-red-500' : ''}`}
              ref={categoryRef}
            >
              <option value="Select one">Select one</option>
              <option value="workshop">Workshop</option>
              <option value="event">Event</option>
            </select>
            {errors.category && <p className="text-red-500 text-sm mb-2">{errors.category}</p>}
            
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mb-2"
              ref={fileInputRef}
            />
            {newEvent.poster && <img src={newEvent.poster} alt="Poster" className="mb-2 w-full max-w-sm" />}
            
            <input
              type="text"
              name="venue"
              placeholder="Venue"
              value={newEvent.venue}
              onChange={handleChange}
              className={`p-2 border border-gray-300 rounded mb-2 w-full ${errors.venue ? 'border-red-500' : ''}`}
              ref={venueRef}
            />
            {errors.venue && <p className="text-red-500 text-sm mb-2">{errors.venue}</p>}
            
            <ReactQuill
              value={newEvent.description}
              onChange={handleDescriptionChange}
              placeholder="Event Description"
              className={`mb-2 ${errors.description ? 'border-red-500' : ''}`}
              ref={descriptionRef}
            />
            {errors.description && <p className="text-red-500 text-sm mb-2">{errors.description}</p>}
            
            <input
              type="text"
              name="host"
              placeholder="Host"
              value={newEvent.host}
              onChange={handleChange}
              className={`p-2 border border-gray-300 rounded mb-2 w-full ${errors.host ? 'border-red-500' : ''}`}
              ref={hostRef}
            />
            {errors.host && <p className="text-red-500 text-sm mb-2">{errors.host}</p>}
            
            <input
              type="text"
              name="registerLink"
              placeholder="Registration Link (Optional)"
              value={newEvent.registerLink}
              onChange={handleChange}
              className={`p-2 border border-gray-300 rounded mb-2 w-full ${errors.registerLink ? 'border-red-500' : ''}`}
              ref={registerLinkRef}
            />
            {errors.registerLink && <p className="text-red-500 text-sm mb-2">{errors.registerLink}</p>}
            
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={handleSubmit}
                className="bg-DGXgreen text-white p-2 rounded"
              >
                Add Event
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-DGXblue text-white p-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedEvent && (
        <div id="event-detail" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-5 max-w-7xl w-full max-h-[90vh] overflow-y-auto z-50">
           
            <h2 className="text-xl font-bold mb-4">Event Details</h2>
            <div className="mb-4">
              <strong>Title:</strong> <span>{selectedEvent.title}</span>
            </div>
            <div className="mb-4">
              <strong>Date & Time:</strong> <span>{moment(selectedEvent.start).format('MMMM D, YYYY h:mm A')} - {moment(selectedEvent.end).format('h:mm A')}</span>
            </div>
            <div className="mb-4">
              <strong>Category:</strong> <span>{selectedEvent.category}</span>
            </div>
            <div className="mb-4">
              <strong>Venue:</strong> <span>{selectedEvent.venue}</span>
            </div>
            <div className="mb-4">
              <strong>Description:</strong> <div dangerouslySetInnerHTML={{ __html: selectedEvent.description }} />
            </div>
            <div className="mb-4">
              <strong>Host:</strong> <span>{selectedEvent.host}</span>
            </div>
			{selectedEvent.poster && (
              <img src={selectedEvent.poster} alt="Event Poster" className="mb-4 w-full max-w-7xl object-cover" />
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

export default Calendar;
