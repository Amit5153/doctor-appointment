import React from "react";
import { CalendarDays, Clock, User, CheckCircle, XCircle } from "lucide-react";

const AppointmentList = ({ appointments }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {appointments.length > 0 ? (
        appointments.map((appointment) => {
          const isPast = new Date(appointment.date) < new Date();
          return (
            <div
              key={appointment.id}
              className="bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105 border-l-4 
              border-blue-500 hover:border-green-500 duration-300"
            >
              <h2 className="text-xl font-bold text-blue-600 flex items-center">
                <User size={20} className="mr-2 text-gray-700" />
                {appointment.doctor}
              </h2>
              <p className="text-gray-700 font-medium mt-2 flex items-center">
                👤 Patient: {appointment.patient}
              </p>
              <p className="text-gray-600 flex items-center">
                <CalendarDays size={18} className="mr-2 text-gray-500" />
                {appointment.date}
              </p>
              <p className="text-gray-600 flex items-center">
                <Clock size={18} className="mr-2 text-gray-500" />
                {appointment.time}
              </p>
              {/* Status Indicator */}
              <div className={`mt-4 text-sm font-semibold flex items-center ${isPast ? "text-red-500" : "text-green-600"}`}>
                {isPast ? (
                  <>
                    <XCircle size={18} className="mr-2" /> Completed
                  </>
                ) : (
                  <>
                    <CheckCircle size={18} className="mr-2" /> Upcoming
                  </>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-center text-gray-500 col-span-full">No appointments found.</p>
      )}
    </div>
  );
};

export default AppointmentList;
