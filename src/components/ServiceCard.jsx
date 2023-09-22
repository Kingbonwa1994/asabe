"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import useServicesStore from "@/store/servicesStore"; // Import your Zustand store

const maxDescriptionLength = 10;
export default function ServiceCard({
  id,
  imageUrl,
  title,
  description,
  openOverlay,
}) {
  const { selectedService, setSelectedService } = useServicesStore(); // Get the setSelectedService function from the store
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    location: "",
    phone: "",
    description: "",
  });

  const handleCardClick = () => {
    // Set the selected service when a card is clicked
    setSelectedService({ id, title, description });
    openOverlay(); // Call the openOverlay function from props
  };
  const handleServiceCardClick = () => {
    openModal(); // Open the modal when a service card is clicked
  };

  const truncatedDescription =
    description && description.length > maxDescriptionLength
      ? description.substring(0, maxDescriptionLength) + " ..."
      : description;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async () => {
    try {
      const selectedService = useServicesStore.getState().selectedService; // Get the selected service from the store
      // Check if a service is selected
      if (selectedService) {
        // Use the selected service to send the WhatsApp message
        const phoneNumber = "+27637715945"; // Specify the desired phone number
        const message = `I am interested in the service: ${selectedService.title}\nLocation: ${formData.location}\nPhone: ${formData.phone}\nDescription: ${formData.description}`;

        const whatsappUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
          phoneNumber
        )}&text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, "_blank");
        const createJobEndpoint = "/api/jobs/create";
        const response = await fetch(createJobEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.status === 201) {
          console.log("Job created successfully");
        } else {
          throw new Error("Error creating job");
        }
        // Your logic to send the message goes here
        console.log("Sending WhatsApp message:", message);

        // Rest of your code for creating a job
      } else {
        console.error("No service selected.");
      }
    } catch (error) {
      // Handle any errors that occur during the process
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updateFormData = (formData) => {
      return {
        ...formData,
        [name]: value,
      };
    };

    setFormData(updateFormData(formData));
  };

  return (
    <div onClick={handleCardClick}>
      <div
        className="group service-card p-4 border-[green-900] rounded-md relative shadow-2xl bg-gradient-to-br from-green-200 via-green-700 to-green-200 transform transition-transform duration-300 ease-out hover:scale-110"
        onClick={handleServiceCardClick}
      >
        <motion.img
          onClick={handleCardClick}
          whileHover={{ scale: 0.7, rotate: 10 }}
          whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
          src={imageUrl}
          alt={title}
          className="w-full bg-inherit h-auto max-h-40 mb-2"
        ></motion.img>
        <h3 className="text-lg font-semibold mb-2 text-purple-950">{title}</h3>
        <p className="text-black">{truncatedDescription}</p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div>
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 backdrop-blur-md z-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-md">
              <h2 className="text-2xl font-semibold mb-4">
                Request Quote for {selectedService ? selectedService.title : ""}
              </h2>

              {/* Actual Form */}
              <form
                onSubmit={handleSubmit}
                className="bg-gradient-to-br from-lightgreen via-seagreen to-grassgreen p-6 rounded-md shadow-lg"
              >
                <div className="mb-4">
                  <label htmlFor="location" className="text-white">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Your location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md py-2 px-3 focus:ring focus:ring-lightgreen focus:border-lightgreen"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="text-white">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md py-2 px-3 focus:ring focus:ring-lightgreen focus:border-lightgreen"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="description" className="text-white">
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="4"
                    placeholder="Your description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-md py-2 px-3 focus:ring focus:ring-lightgreen focus:border-lightgreen"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md"
                >
                  Send WhatsApp
                </button>
              </form>

              <button
                onClick={closeModal}
                className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 mt-4"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
