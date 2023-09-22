import Link from "next/link";
import React from "react";

const ProviderAccount = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-500 p-4 text-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <span>Email: service@example.com</span>
              <span className="ml-4">Phone: +1234567890</span>
            </div>
            {/* Add your navigation links if needed */}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto p-4">
        {/* Job List */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <h2 className="text-2xl font-semibold mb-4">Available Jobs</h2>
          <ul>
            <li>Roofing at DernFern</li>
            <li>Roof leaks at Cosmo</li>
            <li>Roof Reinstall</li>
            {/* Add more jobs here */}
          </ul>
        </div>

        {/* Subscribe Button */}
        <Link
          href="/subscription"
          className="bg-blue-500 text-white text-lg font-semibold rounded-lg py-2 px-4 block text-center hover:bg-blue-600"
        >
          Subscribe
          </Link>
      </div>
    </div>
  );
};

export default ProviderAccount;
