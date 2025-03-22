import React, { useState } from 'react';
import AppointmentCalendar from '../components/AppointmentCalendar';

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Appointment Calendar</h1>
      <AppointmentCalendar onDateClick={handleDateClick} />
      {selectedDate && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Appointments on {selectedDate}</h2>
          {/* Render appointments for the selected date */}
        </div>
      )}
    </div>
  );
};

export default CalendarPage;