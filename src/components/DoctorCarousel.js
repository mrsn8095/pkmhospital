// frontend/src/components/DoctorCarousel.js
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";

const DoctorCarousel = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get("http://localhost:5001/api/doctors");
        setDoctors(data);
      } catch (err) {
        console.error("Error fetching doctors:", err);
      }
    };
    fetchDoctors();
  }, []);

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1500}
      pauseOnHover={false}
      arrows={false}
      showDots={true}
      dotListClass="custom-dot-list"
      className="carousel-container px-5"
    >
      {doctors.map((doc) => (
        <div key={doc._id} className="card mx-2 mt-5" style={{ width: "18rem" }}>
        <img
  src={`http://localhost:5001${doc.image}`} // doc.image = /uploads/<filename>
  alt={doc.name}
  style={{ margin: "10px",  objectFit: "cover", borderRadius: "10%" }}
/>

          <div className="card-body text-center">
            <h5 className="card-title">{doc.name}</h5>
            <p className="card-text text-muted">{doc.specialization}</p>
            <a
              href="/appointment"
              className="btn btn-outline-primary rounded-pill py-md-3 px-md-5 mx-2"
            >
              Book Now
            </a>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default DoctorCarousel;
