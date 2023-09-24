import React from "react";

const JobList = ({ onDelete }) => {
  const jobListings = [
    {
      id: 1,
      title: "Gardening Services",
      location: "123 Green Street",
      phone: "+1112223333",
      description: "Looking for a gardener to maintain our backyard garden.",
    },
    {
      id: 2,
      title: "Solar Panel Maintenance",
      location: "456 Sunshine Avenue",
      phone: "+4445556666",
      description: "Need someone to inspect and maintain our solar panels.",
    },
    {
      id: 3,
      title: "Swimming Pool Management",
      location: "789 Blue Lagoon",
      phone: "+7778889999",
      description: "Hiring a pool manager to oversee pool maintenance.",
    },
    {
      id: 4,
      title: "HVAC Repair",
      location: "101 Cool Breeze Lane",
      phone: "+5556667777",
      description: "Require HVAC technician for air conditioning repair.",
    },
    {
      id: 5,
      title: "Lawn Care Services",
      location: "222 Green Grass Circle",
      phone: "+2223334444",
      description: "Seeking a lawn care specialist for our front yard.",
    },
    {
      id: 6,
      title: "Interior Design Consultation",
      location: "789 Designer's Way",
      phone: "+9998887777",
      description: "Looking for an interior designer to redesign our living room.",
    },
    {
      id: 7,
      title: "Car Detailing",
      location: "333 Auto Avenue",
      phone: "+6667778888",
      description: "Need a car detailer for exterior and interior cleaning.",
    },
    {
      id: 8,
      title: "Electrical Repair",
      location: "444 Spark Street",
      phone: "+3334445555",
      description: "Require an electrician for wiring and fixture repairs.",
    },
    {
      id: 9,
      title: "Roofing Installation",
      location: "567 Rooftop Road",
      phone: "+1234567890",
      description: "Looking for roofing experts to install a new roof.",
    },
    {
      id: 10,
      title: "Painting Services",
      location: "678 Artistic Avenue",
      phone: "+9876543210",
      description: "Hiring professional painters for interior and exterior painting.",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Job Listings</h2>
      <ul>
        {jobListings.map((job) => (
          <li key={job.id} className="mb-4">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-500">{job.location}</p>
            <p className="text-gray-500">Phone: {job.phone}</p>
            <p className="mt-2">{job.description}</p>
            <button
              onClick={() => onDelete(job.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
