import { getDataFromToken } from "@/services/getDataFromToken";
import { NextResponse } from "next/server";
import ServiceProvider from "@/models/serviceProvider";
import connectMongoDB from "@/db/dbConnect";

connectMongoDB()

export async function GET(request){

    try {
        const userId = await getDataFromToken(request);
        const user = await ServiceProvider.findOne({_id: userId}).select("-password");
        return NextResponse.json({
            mesaaage: "Service Provider found",
            data: user
        })
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}