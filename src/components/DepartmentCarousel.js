import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import medicineImg from "../img/departments/gm.png";
import pediatricsImg from "../img/departments/pedo.png";
import dermatologyImg from "../img/departments/dermato.png";
import obgynImg from "../img/departments/gyneco.png";
import entImg from "../img/departments/ent.png";
import imagingImg from "../img/departments/radiology.png";

import deptdata from "../data/departments";

const Departments = [
  {
    name: "General Medicine",
    description: "Comprehensive care for all medical conditions.",
    img: medicineImg,
  },
  {
    name: "Pediatrics",
    description: "Child healthcare and development.",
    img: pediatricsImg,
  },
  {
    name: "Dermatology",
    description: "Expert care for skin and hair issues.",
    img: dermatologyImg,
  },
  {
    name: "Obstetrics & Gynecology",
    description: "Women's health, prenatal and postnatal care.",
    img: obgynImg,
  },
  {
    name: "ENT",
    description: "Ear, Nose & Throat consultations and treatments.",
    img: entImg,
  },
  {
    name: "Imaging & Radiology",
    description: "X-ray, ultrasound, and advanced diagnostic imaging.",
    img: imagingImg,
  },
];

function DepartmentCarousel() {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      pauseOnHover={false}
      containerClass="carousel-container px-5"
      itemClass="px-2"
      transitionDuration={500}
      arrows={false}
    >
      {deptdata.map((dept, index) => (
        <div key={index} className="card mx-2 mt-5" style={{ width: "18rem" }}>
          <img
            src={dept.image}
            alt={dept.name}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10%", // slightly rounded edges
            }}
          />
          <div className="card-body text-center">
            <h5 className="card-title">{dept.name}</h5>
            <p className="card-text text-muted">{dept.description}</p>
            <a href="Department" className="btn btn-outline-primary  rounded-pill py-md-3 px-md-5 mx-2">View</a>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default DepartmentCarousel;
