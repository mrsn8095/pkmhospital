import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Doctors from './pages/Doctors';
import Navbar from './components/Navbar';
import Appointment from './pages/Appoinment';
import Home from './pages/Home';
import Admin from './pages/AdminLogin'
import logo from './logo.svg';
import './App.css';
import AdminAddDoctor from './pages/AdminAddDoctor';
import AdminDashboard from './pages/AdminDashboard';
import DoctorsList from './pages/DoctorsList';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return (
  <Router>
       {/*BOOTSTRAP NAVBAR */}
    <Navbar />

        {/* MAIN CONTENT */}
    <div className="p-0 m-0 mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appoinment" element={<Appointment />} />
        <Route path="/admin/add-doctor" element={
          
          <AdminAddDoctor />} />
        <Route path="/doctors" element={<DoctorsList />} />
        <Route path="/admin/login" element={<Admin />} />
        <Route path="/admin/dashboard" element={
                  <Admin />
          
} />
        


      </Routes>
    </div>
  </Router>

  );
}

export default App;
