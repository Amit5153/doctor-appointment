import React, { useState, useEffect } from "react";
import BookingModal from "../components/BookingModal";


const DoctorAvailability = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Sample doctor data (Replace with API call if needed)
    const doctorData = [
      { id: 1, name: "Dr. Rajesh Kumar", department: "Cardiology", available: true, time: "10:00 AM - 4:00 PM" },
      { id: 2, name: "Dr. Priya Sharma", department: "Dermatology", available: false, time: "N/A" },
      { id: 3, name: "Dr. Amit Verma", department: "Neurology", available: true, time: "11:00 AM - 3:00 PM" },
      { id: 4, name: "Dr. Anjali Singh", department: "Pediatrics", available: true, time: "9:00 AM - 2:00 PM" },
    ];
    setDoctors(doctorData);
  }, []);

  const handleBooking = (appointmentDetails) => {
    // Save appointment to local storage
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.push(appointmentDetails);
    localStorage.setItem("appointments", JSON.stringify(appointments));

    console.log("Appointment booked:", appointmentDetails);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Doctor Availability
      </h1>

      {/* Doctor List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className={`p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
              doctor.available ? "bg-green-100" : "bg-red-100"
            }`}
          >
            <h2 className="text-xl font-bold text-gray-800">{doctor.name}</h2>
            <p className="text-gray-600">🩺 Department: {doctor.department}</p>
            <p className="text-gray-600">⏰ Availability: {doctor.time}</p>

            {doctor.available ? (
              <button
                className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
                onClick={() => {
                  setSelectedDoctor(doctor);
                  setIsModalOpen(true);
                }}
              >
                Book Appointment
              </button>
            ) : (
              <p className="mt-3 text-red-600 font-bold">Not Available</p>
            )}
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {isModalOpen && selectedDoctor && (
        <BookingModal
          doctor={selectedDoctor}
          onClose={() => setIsModalOpen(false)}
          onConfirm={handleBooking}
        />
      )}
    </div>
  );
};

export default DoctorAvailability;
