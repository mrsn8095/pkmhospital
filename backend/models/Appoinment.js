import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  doctorName: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  reason: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Appointment", appointmentSchema);
