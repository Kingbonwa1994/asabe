import { Schema, model, mongoose } from 'mongoose';

const ServiceProviderSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  services: {
    type: Array,
    required: true,
  },
}, {
  timestamps: true,
});

// Add indexes to improve performance
ServiceProviderSchema.index({ username: 1 }, { unique: true });
ServiceProviderSchema.index({ email: 1 }, { unique: true });
ServiceProviderSchema.index({ phone: 1 }, { unique: true });

// Create a model from the schema
const ServiceProvider = mongoose.models.ServiceProvider || model('ServiceProvider', ServiceProviderSchema);

export default ServiceProvider;
