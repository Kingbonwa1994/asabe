import { NextResponse } from 'next/server'; // Import NextResponse and redirect from the correct location
import ServiceProvider from '@/models/serviceProvider';
import connectMongoDB from '@/db/dbConnect';
import { redirect } from 'next/navigation';

export async function POST(req) {
  const { email, phone, password, services } = await req.json();

  try {
    await connectMongoDB();
    const newServiceProvider = await ServiceProvider.create({ email, phone, password, services });
    if (newServiceProvider) {
      return NextResponse.json({
        message: 'A successful registration',
        success: true,
      });
    }
    redirect('/profile', push) // Missing closing brace for the if block
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: error });
  }}
