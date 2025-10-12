import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import doc2 from "../img/doctors/drshivaprasad.png";
import doc3 from "../img/doctors/drsiyadka.png";
import doc4 from "../img/doctors/ridhapadiyath.png";

import doc1 from "../img/doctors/dramjadfarook.png";


const Doctors = [
    { name: "Dr. Amjad Farook", role: "ENT, Head & Neck Surgeon", img: doc1},
    { name: "Dr. Shivaprasad", role: "Consultant Dermatologist" , img: doc2},
    { name: "Dr. Siyad KA", role: "Consultant Paediatrician" , img: doc3},
    { name: "Dr. Rida Padiyath", role: "Consultant Dermatologist" , img: doc4},
     { name: "Dr. Amjad Farook", role: "ENT, Head & Neck Surgeon", img: doc1},
    { name: "Dr. Shivaprasad", role: "Consultant Dermatologist" , img: doc2},
    { name: "Dr. Siyad KA", role: "Consultant Paediatrician" , img: doc3},
    { name: "Dr. Rida Padiyath", role: "Consultant Dermatologist" , img: doc4},

];
function DoctorCarousel(){
    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024,}, items: 4, slideToSlide: 1},
    tablet: { breakpoint: { max: 1024, min:464}, items: 2, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 600, min: 0}, items:1, slidesToSlide: 1},
};
return (
    <Carousel 
        responsive={responsive} 
        infinite={true} 
        autoPlay={true} 
        autoPlaySpeed={1500} 
        pauseOnHover={false}
        arrows={false}
        showDots={false}
        dotListClass="custom-dot-list"
        className="carousel-container px-5" >
           {Doctors.map((doc,index)=> (
            <div key={index} className="card mx-2 mt-5" style={{width: "18rem"}}>
                <img src={doc.img} className="card-img-top rounded" alt="{doc.name}" style={{padding: "10px"}}/>
                <div className="card-body text-center">
                    <h5 className="card-title">{doc.name}</h5>
                    <p className="card-text text-muted">{doc.role}</p>
                     <a href="Appoinment" className="btn btn-outline-primary  rounded-pill py-md-3 px-md-5 mx-2">Book Now</a>
                </div>

            </div>
        ))}
    </Carousel>
);
}
export default DoctorCarousel;