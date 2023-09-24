"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation"; // Use 'router' instead of 'navigation'

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      await axios.get('/api/serviceProvider/logout');
      toast.success('Logout successful');
      router.push('/login');
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  }

  const getUserDetails = async () => {
    try {
      const res = await axios.get('/api/users/me');
      console.log(res.data);
      setData(res.data.data._id);
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <h1 className="text-3xl font-semibold mb-4">Service Providers Hub</h1>
          <div className="flex items-center">
            <div className="bg-green-500 text-white font-bold rounded-full p-2 mr-4">
              {data === 'nothing' ? "N" : <Link href={`/profile/${data}`}>{data}</Link>}
            </div>
            <button
              onClick={getUserDetails}
              className="bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Get User Details
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Available Jobs</h2>
          <ul>
            <li>Roofing at DernFern</li>
            <li>Roof leaks at Cosmo</li>
            <li>Roof Reinstall</li>
            {/* Add more jobs here */}
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Subscription</h2>
          <p className="mb-4">
            Welcome to the trial version of our service! With this trial,
            you'll receive one job offer. To enjoy unlimited job offers, subscribe now.
          </p>
          <Link
            href="/subscription"
            className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg py-2 px-4 block text-center"
          >
            Subscribe for Unlimited Jobs
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="flex items-center mb-4">
            <span className="font-bold mr-2">Email:</span>
            <span>service@example.com</span>
          </div>
          <div className="flex items-center">
            <span className="font-bold mr-2">Phone:</span>
            <span>+2786 685 4785</span>
          </div>
        </div>
        
        <button
          onClick={logout}
          className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg py-2 px-4 mt-8 block text-center"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
