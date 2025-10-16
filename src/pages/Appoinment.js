import React, { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    dob: "",
    email: "",
    phone: "",
    appointmentDate: "",
    timeSlot: "",
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simulate sending OTP
  const handleSendOtp = () => {
    if (!formData.phone) {
      alert("Please enter your phone number first!");
      return;
    }
    alert("✅ OTP sent to your phone (use 123456 to verify).");
    setOtpSent(true);
  };

  // Simulate verifying OTP
  const handleVerifyOtp = () => {
    if (otp === "123456") {
      setIsVerified(true);
      alert("✅ OTP verified successfully!");
    } else {
      alert("❌ Invalid OTP. Try again.");
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎉 Appointment booked successfully for ${formData.name}!`);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Book an Appointment</h2>
      <form
        className="col-md-8 col-lg-6 mx-auto border rounded-4 p-4 shadow-sm bg-white"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Full Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Age */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        {/* DOB */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Date of Birth</label>
          <input
            type="date"
            name="dob"
            className="form-control"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone + OTP */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Phone Number</label>
          <div className="input-group">
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={handleSendOtp}
              disabled={otpSent}
            >
              {otpSent ? "OTP Sent" : "Send OTP"}
            </button>
          </div>
        </div>

        {/* OTP Input */}
        {otpSent && !isVerified && (
          <div className="mb-3">
            <label className="form-label fw-semibold">Enter OTP</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength="6"
              required
            />
            <button
              className="btn btn-success mt-2"
              type="button"
              onClick={handleVerifyOtp}
            >
              Verify OTP
            </button>
          </div>
        )}

        {/* Appointment Date */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Appointment Date</label>
          <input
            type="date"
            name="appointmentDate"
            className="form-control"
            value={formData.appointmentDate}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]} // ✅ prevents past dates
            required
          />
        </div>

        {/* Time Slot */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Preferred Time Slot</label>
          <select
            name="timeSlot"
            className="form-select"
            value={formData.timeSlot}
            onChange={handleChange}
            required
          >
            <option value="">Select a time slot</option>
            <option value="9 AM - 10 AM">9 AM - 10 AM</option>
            <option value="10 AM - 11 AM">10 AM - 11 AM</option>
            <option value="11 AM - 12 PM">11 AM - 12 PM</option>
            <option value="2 PM - 3 PM">2 PM - 3 PM</option>
            <option value="3 PM - 4 PM">3 PM - 4 PM</option>
            <option value="4 PM - 5 PM">4 PM - 5 PM</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={!isVerified}
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
