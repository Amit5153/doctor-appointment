import React, { useState } from 'react';
import { toast } from 'react-toastify';


const BookingModal = ({ onClose, onConfirm }) => {
  const [appointmentDetails, setAppointmentDetails] = useState({
    name: '',
    contact: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails({ ...appointmentDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    if (!appointmentDetails.name || !appointmentDetails.contact || !appointmentDetails.date || !appointmentDetails.time) {
      toast.error('Please fill out all fields.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    // Call the onConfirm prop to handle booking
    onConfirm(appointmentDetails);

    // Show success notification
    toast.success('Appointment booked successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Close the modal
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-6">Book Appointment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
        
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={appointmentDetails.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Contact</label>
            <input
              type="text"
              name="contact"
              value={appointmentDetails.contact}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              placeholder="Enter your contact number"
              required
            />
          </div>
         
          <div>
  <label className="block mb-2">Date</label>
  <input
    type="date"
    name="date"
    value={appointmentDetails.date}
    onChange={handleChange}
    className="w-full p-2 border rounded"
    required
    min={new Date().toISOString().split("T")[0]} // Restrict past dates
  />
</div>

<div>
  <label className="block mb-2">Time</label>
  <input
    type="time"
    name="time"
    value={appointmentDetails.time}
    onChange={handleChange}
    className="w-full p-2 border rounded"
    required
    min={appointmentDetails.date === new Date().toISOString().split("T")[0] 
         ? new Date().toLocaleTimeString([], { hourCycle: "h23", hour: "2-digit", minute: "2-digit" }) 
         : ""} // Restrict past time if today
  />
</div>

          
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;