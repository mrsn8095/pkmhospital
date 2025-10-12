import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Doctors from './pages/Doctors';
import Navbar from './components/Navbar';
import Appointment from './pages/Appoinment';
import Home from './pages/Home';
import logo from './logo.svg';
import './App.css';

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

      </Routes>
    </div>
  </Router>

  );
}

export default App;
