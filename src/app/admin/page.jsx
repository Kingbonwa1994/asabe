"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ServiceProvidersList from "@/components/ServiceProvisersList";
import JobList from "@/components/JobList";

export default function AdminPage() {
  const router = useRouter();
  
  const onDeleteServiceProvider = (serviceProviderId) => {
    // Simulate deletion by filtering out the service provider with the provided ID
    const updatedServiceProviders = dummyServiceProviders.filter(
      (provider) => provider.id !== serviceProviderId
    );
    console.log(`Deleting service provider with ID: ${serviceProviderId}`);
    console.log(updatedServiceProviders); // Log updated service providers
  };
  
  // Define the onRate function to rate a service provider by ID and a given rating
  const onRateServiceProvider = (serviceProviderId, rating) => {
    // Simulate updating the rating of the service provider with the provided ID
    const updatedServiceProviders = dummyServiceProviders.map((provider) => {
      if (provider.id === serviceProviderId) {
        // Update the rating for the matched service provider
        return { ...provider, rating };
      }
      return provider;
    });
    console.log(`Rating service provider with ID: ${serviceProviderId} with ${rating} stars`);
    console.log(updatedServiceProviders); // Log updated service providers
  };
  // State for filtering service providers
  const [filter, setFilter] = useState("all"); // Options: "all", "subscribed", "unsubscribed"

  // State for filtering jobs
  const [jobFilter, setJobFilter] = useState("all"); // Options: "all", "finished", "assigned"

  // State for assigning a job to a specific user
  const [selectedUser, setSelectedUser] = useState(""); // Store the selected user ID

  // State for rating service provider qualities
  const [rating, setRating] = useState(0); // Store the selected rating (e.g., 1 to 5)

  // Function to delete a service provider
  const deleteServiceProvider = (serviceProviderId) => {
    // Implement backend logic to delete the service provider
  };

  // Function to delete a job marked as finished
  const deleteFinishedJob = (jobId) => {
    // Implement backend logic to delete the finished job
  };

  // Function to assign a job to a specific user
  const assignJobToUser = () => {
    // Implement backend logic to assign the job to the selected user
  };

  // Function to filter service providers based on subscription status
  const filterServiceProviders = () => {
    // Implement backend logic to fetch filtered service providers
  };

  // Function to filter jobs based on status
  const filterJobs = () => {
    // Implement backend logic to fetch filtered jobs
  };

  // Function to rate the qualities of a service provider
  const rateServiceProvider = (serviceProviderId) => {
    // Implement backend logic to save the rating for the service provider
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-4">Admin Dashboard</h1>

        {/* Service Providers Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Service Providers</h2>

          {/* Filter Options */}
          <div className="flex items-center mb-4">
            <label className="mr-2">Filter:</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-gray-200 border rounded-md p-2"
            >
              <option value="all">All</option>
              <option value="subscribed">Subscribed</option>
              <option value="unsubscribed">Unsubscribed</option>
            </select>
            <button
              onClick={filterServiceProviders}
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg py-2 px-4 ml-2"
            >
              Apply Filter
            </button>
          </div>

          {/* Service Providers List */}
          <ServiceProvidersList
            onDelete={deleteServiceProvider}
            onRate={rateServiceProvider}
          />
        </div>

        {/* Jobs Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Jobs</h2>

          {/* Filter Options */}
          <div className="flex items-center mb-4">
            <label className="mr-2">Filter:</label>
            <select
              value={jobFilter}
              onChange={(e) => setJobFilter(e.target.value)}
              className="bg-gray-200 border rounded-md p-2"
            >
              <option value="all">All</option>
              <option value="finished">Finished</option>
              <option value="assigned">Assigned</option>
            </select>
            <button
              onClick={filterJobs}
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg py-2 px-4 ml-2"
            >
              Apply Filter
            </button>
          </div>

          {/* Job List */}
          <JobList onDelete={deleteFinishedJob} />
        </div>

        {/* Assign Job Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Assign Job</h2>

          {/* Select User */}
          <div className="mb-4">
            <label className="mr-2">Select User:</label>
            <select
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              className="bg-gray-200 border rounded-md p-2"
            >
              {/* Populate with user options */}
            </select>
          </div>

          <button
            onClick={assignJobToUser}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-lg py-2 px-4"
          >
            Assign Job
          </button>
        </div>
      </div>
    </div>
  );
}
