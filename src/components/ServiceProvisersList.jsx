import React from "react";
// Import your dummy data

const ServiceProvidersList = ({ onDelete, onRate }) => {

    const dummyServiceProviders = [
        {
          id: 1,
          email: "provider1@example.com",
          phone: "+1234567890",
          servicesOffered: ["Plumbing", "Electrical", "Roofing"],
        },
        {
          id: 2,
          email: "provider2@example.com",
          phone: "+9876543210",
          servicesOffered: ["Carpentry", "Painting"],
        },
        {
          id: 3,
          email: "provider3@example.com",
          phone: "+1112223333",
          servicesOffered: ["Landscaping", "Gardening"],
        },
        {
          id: 4,
          email: "provider4@example.com",
          phone: "+4445556666",
          servicesOffered: ["Solar Maintenance", "Solar Installation"],
        },
        {
          id: 5,
          email: "provider5@example.com",
          phone: "+7778889999",
          servicesOffered: ["Swimming Pool Management", "Cleaning"],
        },
        {
          id: 6,
          email: "provider6@example.com",
          phone: "+5556667777",
          servicesOffered: ["HVAC Repair", "Appliance Installation"],
        },
        {
          id: 7,
          email: "provider7@example.com",
          phone: "+2223334444",
          servicesOffered: ["Lawn Care", "Tree Trimming"],
        },
        {
          id: 8,
          email: "provider8@example.com",
          phone: "+9998887777",
          servicesOffered: ["Interior Design", "Home Renovation"],
        },
        {
          id: 9,
          email: "provider9@example.com",
          phone: "+6667778888",
          servicesOffered: ["Car Detailing", "Auto Repair"],
        },
        {
          id: 10,
          email: "provider10@example.com",
          phone: "+3334445555",
          servicesOffered: ["Plumbing", "Electrical"],
        },
      ];


  return (
    <ul>
      {dummyServiceProviders.map((provider) => (
        <li key={provider.id}>
          <p>Email: {provider.email}</p>
          <p>Phone: {provider.phone}</p>
          <p>Services Offered: {provider.servicesOffered.join(", ")}</p>
          <button onClick={() => onDelete(provider.id)}>Delete</button>
          <button onClick={() => onRate(provider.id)}>Rate</button>
        </li>
      ))}
    </ul>
  );
};

export default ServiceProvidersList;
