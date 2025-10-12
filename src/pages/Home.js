import heroimage from "../img/PKM2.jpg";
import Appointment from "./Appoinment";
import DoctorCarousel from "../components/DoctorCarousel";
import DepartmentCarousel from "../components/DepartmentCarousel";
import Testimonials from "../components/Testimonials";
import ContactUs from "../components/ContactUs";



function Home() {
  return (
    <>
      {/* ✅ NO .container HERE */}
      <div
        className="container-fluid position-relative text-center text-white p-0 m-0"
        style={{ overflowX: "hidden" }}
      >
        <img
          src={heroimage}
          alt="Hospital Hero"
          style={{
            width: "100vw",
            height: "90vh",
            objectFit: "cover",
            display: "block",
            filter: "brightness(80%)",
          }}
        />

        <div
          className="position-absolute top-50 start-50 translate-middle"
          style={{ width: "80%" }}
        >
          <h5
            className="d-inline-block text-uppercase border-bottom border-5"
            style={{ borderColor: "rgba(255, 255, 255, 0.5)" }}
          >
            Welcome To PKM Hospital
          </h5>
          <h1 className="display-4 fw-bold mt-3">
            Caring for You,<br /> Every Step of the Way
          </h1>
          <p className="lead mt-4 bg-warning p-0 d-inline-block" style={{color: "ActiveCaption"}}>
            Expert doctors, advanced facilities, and compassionate care — all under one roof.
          </p>
           <div class="pt-2">
                        <a href="Doctors" class="btn btn-light rounded-pill py-md-3 px-md-5 mx-2">Find Doctor</a>
                        <a href="Appoinment" class="btn btn-light rounded-pill py-md-3 px-md-5 mx-2">Appointment</a>
                    </div>
        </div>
   
      </div>


              {/* 👇 Doctors Carousel */}
              <div className="container my-5 text-center">
          <h5 className="text-danger">Our Doctors</h5>
            <DoctorCarousel />
</div>
       
          {/*Department  carousel*/}

            <div className="container my-5 text-center">
          <h5 className="text-danger">Departments</h5>
          <DepartmentCarousel />
          </div>


          {/* Testimonials */}
            <div className="container my-5 text-center">
          <h5 className="text-danger">Testimonial</h5>
          <Testimonials />
          </div>


      {/* About */}
       <div className="container my-5 text-center">
        <h5 className="text-danger mb-3">About Us</h5>
        <h3 className="text-primary">PKM Hospital Pandikkad</h3>
        <p className="lead">
          is dedicated to providing high-quality and compassionate medical care to the community. With a team of experienced doctors, modern facilities, and patient-focused services, we strive to ensure the best possible treatment for every individual.
Our departments cover a wide range of specialties — from general medicine and pediatrics to surgery, gynecology, and emergency care. At PKM Hospital, we combine advanced medical technology with a personal touch, making healthcare accessible, affordable, and reliable for everyone in and around Pandikkad.
        </p>
      </div>
           {/* Contact Us */}
            <div className="container my-5 text-center">
          <h5 className="text-danger">Contact Us</h5>
          <ContactUs />
          </div>


      {/* 🩺 Services Section */}
      <div className="container my-5">
        <h2 className="text-center text-primary mb-4">Our Key Services</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title text-primary">General Medicine</h5>
                <p className="card-text">
                  Comprehensive health checkups and treatment for all ages.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title text-primary">Pediatrics</h5>
                <p className="card-text">
                  Compassionate care for your child’s growth, development, and health.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body">
                <h5 className="card-title text-primary">Surgery</h5>
                <p className="card-text">
                  Expert surgical team with modern technology and safe procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default Home;
