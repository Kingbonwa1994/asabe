const mongoose = require('mongoose');

// Define the Job schema
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, // Remove leading/trailing whitespaces
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
});

// Create the Job model
const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);

export default Job;