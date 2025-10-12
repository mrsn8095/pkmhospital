// src/components/AboutUs.jsx
import React from "react";
import aboutImage from "../img/bg_doctor.jpg";

const AboutUs = () => {
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        {/* Left side - Image */}
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img
            src={aboutImage}
            alt="PKM Hospital Pandikkad"
            className="img-fluid rounded"
          />
        </div>

        {/* Right side - Text */}
        <div className="col-md-6">
          <h5 className="text-danger mb-3">About Us</h5>
          <h3 className="text-primary mb-3">PKM Hospital Pandikkad</h3>
          <p className="lead">
            PKM Hospital Pandikkad is dedicated to providing high-quality and
            compassionate medical care to the community. With a team of experienced
            doctors, modern facilities, and patient-focused services, we strive to
            ensure the best possible treatment for every individual.
          </p>
          <p className="lead">
            Our departments cover a wide range of specialties — from general
            medicine and pediatrics to surgery, gynecology, and emergency care. At
            PKM Hospital, we combine advanced medical technology with a personal
            touch, making healthcare accessible, affordable, and reliable for
            everyone in and around Pandikkad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;