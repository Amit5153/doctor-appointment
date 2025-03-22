import React, { useState } from "react";
import DoctorLoginForm from "../components/DoctorLoginForm";
import { ToastContainer } from "react-toastify";

const DoctorLogin = () => {
  const [doctorData, setDoctorData] = useState(null);

  const handleLogin = async (credentials, resetForm) => {
    console.log("Doctor login:", credentials);

    const response = await fetch(
      "https://67de0ef1471aaaa7428329d5.mockapi.io/doctors",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      }
    );

    if (response.ok) {
      const doctor = await response.json();
      setDoctorData(doctor);
      console.log("Doctor registered successfully:", doctor);
      resetForm(); // Reset form after successful submission
    } else {
      console.error("Failed to register doctor");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Doctor Login</h1>
        <DoctorLoginForm onSubmit={handleLogin} />

        {/* Toast Container */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default DoctorLogin;
