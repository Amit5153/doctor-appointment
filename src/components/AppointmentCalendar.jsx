import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { FaBell } from 'react-icons/fa';

const localizer = momentLocalizer(moment);

const AdvancedCalendar = () => {
  const [events, setEvents] = useState([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [recentAppointments, setRecentAppointments] = useState([]);

  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    
    const formattedEvents = savedAppointments.map((appt) => ({
      title: `Appointment with ${appt.name}`,
      start: new Date(`${appt.date}T${appt.time}`),
      end: new Date(`${appt.date}T${appt.time}`),
      allDay: false,
      color: '#3B82F6', // Tailwind Blue-500
    }));

    setEvents(formattedEvents);

    // Separate upcoming and recent appointments
    const now = moment();
    setUpcomingAppointments(formattedEvents.filter((event) => moment(event.start).isAfter(now)));
    setRecentAppointments(formattedEvents.filter((event) => moment(event.start).isBefore(now)));
  }, []);

  const handleEventClick = (event) => {
    alert(`Appointment: ${event.title}\nDate: ${moment(event.start).format('MMMM Do YYYY, h:mm a')}`);
  };

  const handleAlarm = (event) => {
    alert(`Reminder set for: ${event.title}`);
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">📅 Appointment Calendar</h2>

      {/* Calendar Section */}
      <div className="h-[500px] shadow-lg rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 p-4">
        {events.length > 0 ? (
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            onSelectEvent={handleEventClick}
            eventPropGetter={(event) => ({
              style: {
                backgroundColor: event.color,
                borderRadius: '6px',
                border: 'none',
                color: '#fff',
              },
            })}
          />
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">No appointments available.</p>
        )}
      </div>

      {/* Upcoming & Recent Appointments Section */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upcoming Appointments */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">📌 Upcoming Appointments</h3>
          {upcomingAppointments.length > 0 ? (
            upcomingAppointments.map((event, index) => (
              <AppointmentCard key={index} event={event} handleAlarm={handleAlarm} />
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-400">No upcoming appointments.</p>
          )}
        </div>

        {/* Recent Appointments */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">🕒 Recent Appointments</h3>
          {recentAppointments.length > 0 ? (
            recentAppointments.map((event, index) => (
              <AppointmentCard key={index} event={event} handleAlarm={handleAlarm} />
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-400">No recent appointments.</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Reusable Appointment Card Component
const AppointmentCard = ({ event, handleAlarm }) => (
  <div className="p-4 mb-4 rounded-lg shadow-md flex justify-between items-center bg-blue-500 text-white">
    <div>
      <p className="text-lg font-bold">{event.title}</p>
      <p className="text-sm">{moment(event.start).format('MMMM Do YYYY, h:mm a')}</p>
    </div>
    <button
      onClick={() => handleAlarm(event)}
      className="p-2 bg-white text-gray-800 rounded-full hover:bg-gray-100 transition-transform transform hover:scale-110"
    >
      <FaBell />
    </button>
  </div>
);

export default AdvancedCalendar;
