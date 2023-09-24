

import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import connectMongoDB from "@/db/dbConnect";
import ServiceProvider from "@/models/serviceProvider";

connectMongoDB()

export async function POST(request){
    try {

        const reqBody = await request.json()
        const {email, password} = reqBody;
        console.log(reqBody);
        const serviceProvider = await ServiceProvider.findOne({email})
        if(!serviceProvider){
            return NextResponse.json({error: "serviceProviderdoes not exist"}, {status: 400})
        }
        console.log("user exists");
        
        //check if password is correct
        const validPassword = await bcryptjs.compare(password, serviceProvider.password)
        if(!validPassword){
            return NextResponse.json({error: "Invalid password"}, {status: 400})
        }
        console.log(serviceProvider);
        
        //create token data
        const tokenData = {
            id: serviceProvider._id,
            email: serviceProvider.email
        }
        //create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: "1d"})

        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })
        response.cookies.set("token", token, {
            httpOnly: true, 
            
        })
        return response;

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}