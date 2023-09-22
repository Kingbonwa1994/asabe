"use client";
import { useState, useMemo } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    services: ["", "", ""],
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleServiceChange = (index, value) => {
    const updatedServices = [...formData.services];
    updatedServices[index] = value;
    setFormData({ ...formData, services: updatedServices });
  };

  const handleAddService = () => {
    if (formData.services.length < 3) {
      const updatedServices = [...formData.services, ""];
      setFormData({ ...formData, services: updatedServices });
    }
  };

  const handleRemoveService = (index) => {
    const updatedServices = [...formData.services];
    updatedServices.splice(index, 1);
    setFormData({ ...formData, services: updatedServices });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if services array has at least one non-empty service
    if (!formData.services.some((service) => service.trim() !== "")) {
      setError("Please add at least one service.");
      return;
    }

    try {
      const response = await fetch("/api/serviceProvider", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          // Registration was successful, you can handle this as needed
          setSuccess(true);
        } else {
          // Registration failed, display error messages
          setError(data.msg);
        }
      } else {
        // Handle non-OK response, e.g., server error
        setError("Server error occurred.");
      }
    } catch (error) {
      // Handle fetch error, e.g., network issue
      setError("An error occurred while registering.");
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="py-4 mt-4 border-t flex flex-col gap-5">
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            value={formData.email}
            autoComplete
            name="email"
            type="email"
            id="email"
            placeholder="john@gmail.com"
            required
          />
        </div>
  
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            value={formData.phone}
            type="tel"
            id="phone"
            name="phone"
            placeholder="123-456-7890"
            required
          />
        </div>
  
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            value={formData.password}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
        </div>
  
        <div>
          <label htmlFor="services">Services</label>
          {formData.services.map((service, index) => (
            <div key={index} className="flex gap-2">
              <input
                onChange={(e) => handleServiceChange(index, e.target.value)}
                value={service}
                name="services"
                type="text"
                placeholder="Service"
                required
              />
              <button
                type="button"
                onClick={() => handleRemoveService(index)}
                className="bg-red-600 text-white p-2 rounded-md"
              >
                Remove
              </button>
            </div>
          ))}
          {formData.services.length < 3 && (
            <button
              type="button"
              onClick={handleAddService}
              className="bg-green-700 text-white p-2 rounded-md"
            >
              Add Service
            </button>
          )}
        </div>
  
        <button className="bg-green-700 p-3 text-white font-bold" type="submit">
          Sign Up
        </button>
      </form>
  
      {error && <div className="text-red-600 px-5 py-2">{error}</div>}
      {success && <div className="text-green-800 px-5 py-2">Registration successful!</div>}
    </>
  );}  