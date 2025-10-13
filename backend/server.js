import doctorRoutes from './routes/doctorRoutes.js';
// import appointmentRoutes from './routes/appointmentRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import path from "path";

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Serve uploaded images
app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));

// API Routes
app.use('/api/doctors', doctorRoutes);
// app.use('/api/appointments', appointmentRoutes);
app.use("/api/contact", contactRoutes);

// Test route
app.get('/', (req, res) => res.send("SERVER RUNNING..."));

// Serve React frontend in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(path.resolve(), "frontend/build")));

  // Catch-all: send index.html for React routing
  app.get("*", (req, res) => {
    res.sendFile(path.join(path.resolve(), "frontend/build", "index.html"));
  });
}

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MONGODB CONNECTION SUCCESSFUL'))
  .catch(err => console.log(err));

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log('SERVER RUNNING ON PORT ' + PORT));
