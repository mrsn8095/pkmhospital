import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Doctors from './pages/Doctors';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Appointment from './pages/Appoinment';
import Home from './pages/Home';
import Admin from './pages/AdminLogin';
import Departments from './pages/Departments';
import logo from './logo.svg';
import './App.css';
import AdminAddDoctor from './pages/AdminAddDoctor';
import AdminDashboard from './pages/AdminDashboard';
import DoctorsList from './pages/DoctorsList';
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
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/doctors" element={<DoctorsList />} />
        <Route path="/admin/login" element={<Admin />} />
        <Route path='/departments' element={<Departments />} />
        <Route path="/admin/dashboard" element={
                  <Admin />
                  
          
} />
        


      </Routes>
    </div>
    <Footer />
  </Router>

  );
}

export default App;
