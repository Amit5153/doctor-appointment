import React, { useState, useEffect } from "react";
import BookingModal from "../components/BookingModal";

const DoctorAvailability = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [error, setError] = useState(null);

  // Random data helpers
  const departments = ["Cardiology", "Dermatology", "Neurology", "Pediatrics", "Orthopedics"];
  const timeSlots = ["9 AM - 12 PM", "12 PM - 3 PM", "3 PM - 6 PM", "6 PM - 9 PM"];

  const fetchDoctors = async () => {
    try {
      const response = await fetch(
        "https://67de0ef1471aaaa7428329d5.mockapi.io/doctors"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // Assign random values for department, availability, and time
      const modifiedDoctors = data.map((doctor) => ({
        ...doctor,
        department: departments[Math.floor(Math.random() * departments.length)],
        time: timeSlots[Math.floor(Math.random() * timeSlots.length)],
        available: Math.random() < 0.6, // 60% chance to be available
      }));

      setDoctors(modifiedDoctors);
    } catch (error) {
      console.error("Error fetching doctors:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  // Filter doctors by department
  const filteredDoctors =
    selectedDepartment === "All"
      ? doctors
      : doctors.filter((doc) => doc.department === selectedDepartment);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Doctor Availability
      </h1>

      {/* Error Message */}
      {error && (
        <div className="text-red-600 text-center font-semibold p-4">
          Something went wrong: {error}
          <br />
          Please refresh the page or try again later.
        </div>
      )}

      {/* Department Filter */}
      <div className="flex justify-center mb-4">
        <select
          className="p-2 border border-gray-300 rounded-md shadow-md"
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          <option value="All">All Departments</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      {/* Doctor List */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {!error && doctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className={`p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
                doctor.available ? "bg-green-100" : "bg-red-100"
              }`}
            >
              <img
                src={doctor.avatar}
                alt={doctor.name}
                className="w-24 h-24 mx-auto rounded-full mb-3 shadow-md"
              />
              <h2 className="text-xl font-bold text-gray-800">{doctor.name}</h2>
              <p className="text-gray-600">🆔 ID: {doctor.id}</p>
              <p className="text-gray-600">🩺 Department: {doctor.department}</p>
              <p className="text-gray-600">⏰ Availability: {doctor.time}</p>
              <p
                className={`mt-2 font-bold ${
                  doctor.available ? "text-green-600" : "text-red-600"
                }`}
              >
                {doctor.available ? "Available" : "Not Available"}
              </p>

              {doctor.available && (
                <button
                  className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
                  onClick={() => setSelectedDoctor(doctor)}
                >
                  Book Appointment
                </button>
              )}
            </div>
          ))
        ) : (
          !error && (
            <p className="text-center text-gray-500 col-span-full">
              No doctors available in this department.
            </p>
          )
        )}
      </div> */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {!error && doctors.length > 0 ? (
    filteredDoctors.map((doctor) => (
      <div
        key={doctor.id}
        className={`p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
          doctor.available ? "bg-green-100" : "bg-red-100"
        }`}
      >
        {/* Doctor Profile Image */}
        <img
  src={`https://ui-avatars.com/api/?name=${doctor.name.replace(" ", "+")}&background=random`}
  alt={doctor.name}
  className="w-24 h-24 mx-auto rounded-full mb-3 shadow-md"
/>




        {/* Doctor Details */}
        <h2 className="text-xl font-bold text-gray-800 text-center">{doctor.name}</h2>
        <p className="text-gray-600 text-center">🩺 Department: {doctor.department}</p>
        <p className="text-gray-600 text-center">⏰ Availability: {doctor.time}</p>

        {/* Booking Button */}
        {doctor.available ? (
          <button
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 block mx-auto"
            onClick={() => setSelectedDoctor(doctor)}
          >
            Book Appointment
          </button>
        ) : (
          <p className="mt-3 text-red-600 font-bold text-center">Not Available</p>
        )}
      </div>
    ))
  ) : (
    !error && (
      <p className="text-center text-gray-500 col-span-full">
        No doctors available in this department.
      </p>
    )
  )}
</div>



      {/* Booking Modal */}
      {selectedDoctor && (
        <BookingModal
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
        />
      )}
    </div>
  );
};

export default DoctorAvailability;
