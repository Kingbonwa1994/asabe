import mongoose from "mongoose";

const serviceProviderSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },

  phone: {
    type: String,
    required: [true, "Phone is required."],
    // You can add additional phone number validation here if needed
  },

  password: {
    type: String,
    required: [true, "Password is required."],
    // You can add additional password validation here if needed
  },

  services: {
    type: [String],
    validate: {
      validator: function (services) {
        return services.length <= 3;
      },
      message: "You can only add up to three services.",
    },
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const ServiceProvider = mongoose.models.ServiceProvider || mongoose.model("ServiceProvider", userSchema);

export default ServiceProvider;
