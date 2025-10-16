import React from "react";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer text-light py-5 mt-5">
      <div className="container">
        <div className="row gy-4">
          {/* About Section */}
          <div className="col-md-4 text-center text-md-start">
            <h5 className="fw-bold mb-3">PKM Hospital, Pandikkad</h5>
            <p className="small text-dark-50">
              Providing compassionate and advanced healthcare with experienced doctors, modern facilities, and patient-centered care.
            </p>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 text-center">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <p className="mb-1">
              <FaPhoneAlt className="me-2" /> +91 98765 43210
            </p>
            <p className="mb-1">
              <FaEnvelope className="me-2" /> info@pkmhospital.com
            </p>
            <p className="mb-1">
              <FaLocationDot className="me-2" /> Pandikkad, Kerala
            </p>
          </div>

          {/* Social Links */}
          <div className="col-md-4 text-center text-md-end">
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="#" className="text-light fs-5">
                <FaFacebookF />
              </a>
              <a href="#" className="text-light fs-5">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light mt-4" />
        <p className="text-center small text-dark-50 mb-0">
          © {new Date().getFullYear()} PKM Hospital. All rights reserved.
           
        </p>
         <p className="text-center small mt-1">
          Developed by{" "}
          <a
            href="https://mrsn8095.github.io/myPersonalWebsite/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark fw-bold"
          >
            Muhammed Roshan
          </a>
        </p>
    </div>
    </footer>
  );
};

export default Footer;
