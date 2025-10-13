// backend/models/doctor.js
import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  specialization: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    required: true
  },
  consultationTime: {
    type: Number, // in hours
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Doctor', doctorSchema);
