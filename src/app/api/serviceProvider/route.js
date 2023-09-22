import { NextResponse } from "next/server";
import mongoose from "mongoose";
import ServiceProvider from "@/models/serviceProvider";

export async function POST(req) {
  const { email, phone, password, services } = await req.json();

  try {
    await connectDB();
    await ServiceProvider.create({ email, phone, password, services });

    return NextResponse.json({
      msg: ["Registration successful"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to register."] });
    }
  }
}
