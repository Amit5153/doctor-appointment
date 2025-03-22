import React, { useState, useEffect } from "react";
import { CalendarDays, Clock, PhoneCall, User, Trash, Edit } from "lucide-react";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  // Fetch appointments from local storage on component mount
  useEffect(() => {
    const savedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(savedAppointments);
  }, []);

  // Delete appointment
  const handleDelete = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  };

  // Edit or Reschedule appointment
  const handleEdit = (index) => {
    const newDate = prompt("Enter new date (YYYY-MM-DD):", appointments[index].date);
    const newTime = prompt("Enter new time (HH:MM AM/PM):", appointments[index].time);

    if (newDate && newTime) {
      const updatedAppointments = [...appointments];
      updatedAppointments[index] = { ...updatedAppointments[index], date: newDate, time: newTime };
      setAppointments(updatedAppointments);
      localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">📅 All Appointments</h1>
      {appointments.length > 0 ? (
        <ul className="w-full max-w-3xl space-y-6">
          {appointments.map((appt, index) => (
            <li
              key={index}
              className="bg-white p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105 border-l-4 border-blue-500 hover:border-green-500 duration-300"
            >
 <h2 className="text-lg font-bold text-gray-900 flex items-center">
  <User size={20} className="mr-2 text-blue-500" />
  {appt.name} (with Dr. {appt.doctor})
</h2>

              <p className="text-gray-700 flex items-center mt-2">
                <PhoneCall size={18} className="mr-2 text-green-500" />
                {appt.contact}
              </p>
              <p className="text-gray-600 flex items-center mt-1">
                <CalendarDays size={18} className="mr-2 text-gray-500" />
                {appt.date}
              </p>
              <p className="text-gray-600 flex items-center mt-1">
                <Clock size={18} className="mr-2 text-gray-500" />
                {appt.time}
              </p>
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={() => handleEdit(index)}
                  className="flex items-center px-3 py-2 text-sm bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition"
                >
                  <Edit size={16} className="mr-1" /> Reschedule
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="flex items-center px-3 py-2 text-sm bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
                >
                  <Trash size={16} className="mr-1" /> Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center mt-16">
          <p className="text-gray-500 text-lg">😞 No appointments found.</p>
          <p className="text-gray-400">Schedule one to see it here!</p>
        </div>
      )}
    </div>
  );
};

export default Appointments;
