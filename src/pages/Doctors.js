import { useEffect, useState } from "react";
import axios from "axios";

function Doctors()  {
    const [doctors, setDoctors] = useState([]);
    useEffect(()=> {
        axios.get("http://localhost:5000/api/doctors")
        .then(res => setDoctors(res.data))
        .catch(err => console.log(err));
    },[]);
    return (
        <div>
            <h2>
                Doctors blue berry
            </h2>
            <ul>
                {doctors.map(doc => (
                    <li key={doc._id}>{doc.name} - {doc.specialization}</li>
                ))}
            </ul>
        </div>
    );
}
export default Doctors;
