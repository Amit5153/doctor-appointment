import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CalendarPage from './pages/CalendarPage';
import BookAppointment from './pages/BookAppointment';
import Appointments from './pages/Appointments';
import UserLogin from './pages/UserLogin';
import DoctorLogin from './pages/DoctorLogin';
import DoctorAvailability from './pages/DoctorAvailability';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Calendar Page */}
        <Route path="/calendar" element={<CalendarPage />} />

        {/* Appointment Booking Page */}
        <Route path="/book-appointment" element={<BookAppointment />} />

        {/* Appointment List Page */}
        <Route path="/appointments" element={<Appointments />} />

        {/* User Login Page */}
        <Route path="/user-login" element={<UserLogin />} />

        {/* Doctor Login Page */}
        <Route path="/doctor-login" element={<DoctorLogin />} />

        {/* Doctor Search Availability Page */}
        <Route path="/doctor-availability" element={<DoctorAvailability />} />
      </Routes>
    </Router>
  );
};

export default App;