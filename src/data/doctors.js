// frontend/src/data/doctors.js
import dramjadfarook from "../img/doctors/dramjadfarook.png";
import drsiyadka from "../img/doctors/drsiyadka.png";
import drshivaprasad from "../img/doctors/drshivaprasad.png";
import drridapadiyath from "../img/doctors/drridapadiyath.png";
import drpriya from "../img/doctors/drpriyadarshini.png"


const doctors = [
  {
    _id: "1",
    name: "Dr. Amjad Farook",
    specialization: "ENT Head & Neck Surgeon",
    qualification: "MBBS,MS",
    image: dramjadfarook,   
    
  },
  {
    _id: "2",
    name: "Dr. Siyad K A",
    specialization: "Consultant Paediatrician",
    qualification: "MBBS, MD Paediatric",
    image: drsiyadka,
    consultationTime: "9:30 AM - 12:30 PM, 5:00 PM - 8:00 PM",
  },
  {
    _id: "3",
    name: "Dr. Priyadarshini",
    specialization: "Gynecologist",
    qualification: "MBBS, DGO, PGDHS (USG)",
    image: drpriya,
    consultationTime: "9:30 AM - 12:30 PM, 5:00 PM - 8:00 PM",
    description: "Dr. Priyadarshini is an experienced gynecologist specializing in women’s health, prenatal and postnatal care, and advanced ultrasound diagnostics. With a patient-centered approach, she provides compassionate care in managing obstetric, gynecological, and reproductive health concerns. Her expertise in ultrasound scanning (USG) ensures accurate diagnosis and personalized treatment for every patient.",
  },
  {
    _id: "4",
    name: "Dr. Shivaprasad",
    specialization: "Dermatologist",
    qualification:"MBBS",
    image: drshivaprasad,
    consultationTime: "9:30 AM - 12:30 PM, 5:00 PM - 8:00 PM",

  },{
    _id: "5",
    name: "Dr. Rida Padiyath",
    qualification: "MBBS, MD, DVL",
    specialization: "Consultant Dermatologist",
    image: drridapadiyath,
    consultationTime: "9:30 AM - 12:30 PM, 5:00 PM - 8:00 PM",
},


  
];

export default doctors;
