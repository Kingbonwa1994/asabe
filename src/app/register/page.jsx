'use client'
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from "next/router" instead of "next/navigation"

export default function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    services: ["", "", ""],
  });
  const [message, setMessage] = useState(""); // Combined state for error and success messages

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
      setMessage("Please add at least one service.");
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
          
          setMessage("Registration successful!");
          router.push("/profile");
        } else {
          // Registration failed, display error messages
          setMessage(data.msg);
        }
      } else {
        // Handle non-OK response, e.g., server error
        setMessage("Server error occurred.");
      }
    } catch (error) {
      // Handle fetch error, e.g., network issue
      setMessage("An error occurred while registering.");
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="py-4 mt-4 border-t items-center bg-black-100 flex flex-col gap-5 sm:w-3/4 mx-auto">
        <h1 className="text-bold">Register As A ServiceProvider</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            value={formData.email}
            autoComplete="email"
            name="email"
            type="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        {/* Add similar input fields for phone and password */}
<div>
  <label htmlFor="phone">Phone Number</label>
  <input
    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
    value={formData.phone}
    type="tel"
    id="phone"
    name="phone"
    placeholder="Phone Number"
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
            <div key={index} className="relative group">
              <input
                onChange={(e) => handleServiceChange(index, e.target.value)}
                value={service}
                name="services"
                type="text"
                placeholder="Service"
                required
                className="border p-2 rounded-md focus:outline-none focus:ring focus:border-blue-400"
              />
              <button
                type="button"
                onClick={() => handleRemoveService(index)}
                className="hidden group-hover:inline-block bg-red-600 text-white p-2 rounded-md"
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
      {message && (
        <div className={`px-5 py-2 text-center ${message.startsWith("Registration") ? "text-green-800" : "text-red-600"}`}>
          {message}
        </div>
      )}
    </>
  );
}
