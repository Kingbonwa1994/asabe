import { NextResponse } from 'next/server';
import ServiceProvider from '@/models/serviceProvider';
import connectMongoDB from '@/db/dbConnect';

export async function POST(req) {
  // Check if the request body is empty
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  if (isEmpty(req.body)) {
    return NextResponse.json({
      message: 'Invalid request body',
      success: false,
    });
  }

  // Check if the required fields are present
  const requiredFields = ['email', 'phone', 'password', 'services'];
  const missingFields = requiredFields.filter((field) => !req.body[field]);
  if (missingFields.length > 0) {
    return NextResponse.json({
      message: `Missing required fields: ${missingFields.join(', ')}`,
      success: false,
    });
  }
 
  // Connect to MongoDB
  await connectMongoDB();

  const serviceProviderExists = await ServiceProvider.findOne({ email: req.body.email });
  if (serviceProviderExists) {
    return NextResponse.json({
      message: 'Service provider already exists',
      success: false,
    });
  }

  // Create a new service provider
  const newServiceProvider = await ServiceProvider.create({
    username: req.body.username,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    services: req.body.services,
  });

  // Check if the service provider was created successfully
  if (!newServiceProvider) {
    return NextResponse.json({
      message: 'Failed to create service provider',
      success: false,
    });
  }

  // Return a successful response
  return NextResponse.json({
    message: 'A successful registration',
    success: true,
  });
}
