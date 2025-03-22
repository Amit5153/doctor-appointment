import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DoctorLoginForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    available: true,
    time: "",
    specialization: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData, () => {
      // Show toast message after successful registration
      toast.success(`Doctor ${formData.name} registered successfully! 🎉`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });

      // Reset form fields
      setFormData({
        name: "",
        department: "",
        available: true,
        time: "",
        specialization: "",
      });
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Doctor's Name"
        required
        className="w-full p-2 border rounded-md"
      />
      <input
        type="text"
        name="department"
        value={formData.department}
        onChange={handleChange}
        placeholder="Department"
        required
        className="w-full p-2 border rounded-md"
      />
      <input
        type="text"
        name="specialization"
        value={formData.specialization}
        onChange={handleChange}
        placeholder="Specialization"
        required
        className="w-full p-2 border rounded-md"
      />
      <input
        type="text"
        name="time"
        value={formData.time}
        onChange={handleChange}
        placeholder="Available Time"
        required
        className="w-full p-2 border rounded-md"
      />
      <label className="flex items-center">
        <input
          type="checkbox"
          name="available"
          checked={formData.available}
          onChange={handleChange}
          className="mr-2"
        />
        Available
      </label>

      <button
        type="submit"
        className="w-full p-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
      >
        Register
      </button>
    </form>
  );
};

export default DoctorLoginForm;
