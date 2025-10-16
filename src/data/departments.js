import gm from "../img/dept/medicine.png";
import gyneco from "../img/dept/gyneco.png";
import gs from "../img/dept/surgery.png";
import ent from "../img/dept/ent.png";
import neo from "../img/dept/neonatology.png";




const dept = [
    {
        _id: "0",
        name: "General Medicine",
        image: gm ,
        description:"Provides comprehensive primary care, and diagnosis and treatment for a wide range of acute and chronic adult illnesses (like viral fever, diabetes, etc.). Primary care physicians often focus on overall wellness and disease prevention.",
    },{
        _id: "2",
        name: "Obstetrics and Gynaecology",
        image: gyneco ,
        description: "Dedicated to women's health, including maternity care (pregnancy and childbirth), reproductive health, and treatment for gynaecological conditions (e.g., ovarian diseases, fibroid removal, Hysterectomy, and related surgical procedures).",
    },
    {
        _id: "3",
        name: "General Surgery",
        image: gs ,
        description: "Handles common surgical procedures, including both open and minimally invasive (Laparoscopic) surgeries for various conditions (e.g., Piles, Hernia, Ovarian Cysts).",
    },
    {
        _id: "4",
        name: "ENT (Ear, Nose, and Throat) ",
        image: ent ,
        description: "Provides consultation and treatment for conditions related to the ear, nose, throat, head, and neck. Includes Pediatric ENT Consultation.",
    },
    {
        _id: "5",
        name: "Paediatrics & Neonatology",
        image: neo ,
        description: "Specialised medical services and healthcare for infants, children, and adolescents. Neonatology focuses on the care of newborns, especially those who are ill or premature.",
    },

    
];

export default dept;