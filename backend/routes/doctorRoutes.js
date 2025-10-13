import express from "express";
import multer from "multer";
import Doctor from "../models/Doctor.js";

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Make sure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// Add a doctor
router.post("/add-doctor", upload.single("image"), async (req, res) => {
  try {
    const { name, specialization, qualification, description, consultationTime } = req.body;
    const image = req.file ? req.file.filename : null;

    const doctor = await Doctor.create({ name, specialization, qualification, description, consultationTime, image });

    res.status(201).json({ message: "Doctor added successfully", doctor });
  } catch (err) {``
    res.status(500).json({ message: err.message });
  }
});

// Get all doctors
router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
