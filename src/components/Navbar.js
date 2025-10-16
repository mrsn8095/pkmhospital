import { Link } from "react-router-dom";
import logo from '../img/logo.png';


function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid border-bottom fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                <img src={logo} 
                    alt="Logo" 
                    width="40" 
                    height="40" 
                    className="d-inline-block align-text-top"
                    style={{marginLeft: "60px"}}
                />{" "}
                <h3 className=" text-uppercase">pkm Hospital</h3>
                </Link>
                <button 
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle Navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/departments">Departments</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/doctors">Doctors</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/appointment">Appoinment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;