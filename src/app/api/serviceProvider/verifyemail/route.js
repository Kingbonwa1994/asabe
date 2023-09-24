import { NextRequest, NextResponse } from "next/server";
import ServiceProvider from "@/models/serviceProvider";
import connectMongoDB from "@/db/dbConnect";



connectMongoDB()


export async function POST(request){

    try {
        const reqBody = await request.json()
        const {token} = reqBody
        console.log(token);

        const serviceProvider = await ServiceProvider.findOne({verifyToken: token, verifyTokenExpiry: {$gt: Date.now()}});

        if (!user) {
            return NextResponse.json({error: "Invalid token"}, {status: 400})
        }
        console.log(serviceProvider);

        serviceProvider.isVerfied = true;
        serviceProvider.verifyToken = undefined;
        serviceProvider.verifyTokenExpiry = undefined;
        await serviceProvider.save();
        
        return NextResponse.json({
            message: "Email verified successfully",
            success: true
        })


    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }

}