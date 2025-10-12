import { useState } from "react";
import axios from "axios";

function Appointment({ doctorId }) {
    const [form, setForm] = useState({ patientName: "", email: "", date: "", slot: "" });
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/appointments", { doctorId, ...form });
            setMessage("Appointment booked!");
        } catch (err) {
            setMessage(err.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Name" onChange={e => setForm({ ...form, patientName: e.target.value })} />
            <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
            <input type="date" onChange={e => setForm({ ...form, date: e.target.value })} />
            <input placeholder="Slot (e.g., 10:00 AM)" onChange={e => setForm({ ...form, slot: e.target.value })} />
            <button type="submit">Book</button>
            <p>{message}</p>
        </form>
    );
}

export default Appointment;
