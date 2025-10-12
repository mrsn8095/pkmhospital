import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Import testimonial images
import musthafaImg from "../img/testimonials/mustafaImg.png";
import niyasImg from "../img/testimonials/niyask.png";
import ilshaImg from "../img/testimonials/ilsha.png";
const testimonials = [
  {
    name: "Musthafa",
    subName: "Kunnummal",
    img: musthafaImg,
    text: `We are deeply thankful to Dr. Priya and the wonderful nursing team
      for their exceptional care and support. My wife had her first delivery through
      C-section, and after 2.5 years, we were blessed with a successful normal delivery. Dr.
      Priya’s confidence, expert guidance, and emotional support gave us immense strength
      throughout the journey. The nurses were always kind, caring, and attentive, making us
      feel safe and supported every step of the way. Thank you all for being a part of this
      beautiful experience!`,
  },
  {
    name: "Niyas K",
    subName: "",
    img: niyasImg,
    text: `I’m writing this as a proud and grateful husband. My wife gave
      birth here recently, and the experience was exceptional. The doctors were thorough and
      always available to answer our questions. The delivery team worked with care and
      patience, supporting her every step of the way. Post-delivery care was amazing—they
      helped her rest, guided her through feeding, and cared for our baby with love. The
      hospital was very clean, and everything ran smoothly. I felt included in the process and
      supported as a partner. If you’re looking for a safe, caring place for childbirth, this
      is the one to trust.`,
  },
  {
    name: "Ilshadsabah Abdullha",
    subName: "",
    img: ilshaImg,
    text: `I truly feel at home here. My wife delivered our third baby via
      elective C-section, and we couldn’t be more grateful to Dr. Priya and Dr. Siyad for
      their exceptional care. The entire staff is incredibly friendly and professional,
      making us feel welcomed and comfortable every step of the way. The hospital’s
      cleanliness and longstanding legacy add to its perfection. Thank you for making this
      experience so special.`,
  },
];

function Testimonials() {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container">
        {/* Heading */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "500px" }}>
       
          <h1 className="display-4">Patients Say About Our Services</h1>
        </div>

        {/* Carousel */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              pauseOnHover={false}
              arrows={false}
              
              containerClass="testimonial-carousel"
              
            >
              {testimonials.map((testi, index) => (
                <div key={index} className="testimonial-item text-center p-4">
                  <div className="position-relative mb-4">
                    <img
                      src={testi.img}
                      alt={testi.name}
                      className="img-fluid rounded-circle mx-auto"
                      style={{ width: "150px", height: "150px", objectFit: "cover" }}
                    />
                    <div
                      className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i className="fa fa-quote-left fa-2x text-primary"></i>
                    </div>
                  </div>
                  <p className="fs-5 fw-normal">{testi.text}</p>
                  <hr className="w-25 mx-auto" />
                  <h3>{testi.name}</h3>
                  {testi.subName && <h6 className="fw-normal text-primary mb-3">{testi.subName}</h6>}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
