"use client"
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from "next/router" instead of "next/navigation"
import Link from "next/link";

export default function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    services: [],
  });

  let services = formData.services;
if (!Array.isArray(services)) {
  services = [];
}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddService = () => {
    if (formData.services.length < 3) {
      setFormData({ ...formData, services: [...formData.services, []] });
    }
  };

  const handleRemoveService = (index) => {
    const updatedServices = [...formData.services];
    updatedServices.splice(index, 1);
    setFormData({ ...formData, services: updatedServices });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (services.some((service) => service.trim() !== "")) {
      return;
    }

    try {
      const response = await fetch("/api/serviceProvider/signup", {
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
          router.push("/profile");
        } else {
          // Registration failed, display error messages
        }
      } else {
        // Handle non-OK response, e.g., server error
        console.error("Server error occurred.");
      }
    } catch (error) {
      // Handle fetch error, e.g., network issue
      console.error(error);
    }
  };
  console.log("formData.services:", formData.services)

  return (
    <div className="bg-indigo-100 flex-1">
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-t items-center bg-black-100 flex flex-col gap-5 flex-1 sm:w-3/4 mx-auto"
      >
        <h1 className="text-4xl text-sky-blue font-bold italic text-center animate-bounce">
          Register As A ServiceProvider
        </h1>
        <div>
          <label htmlFor="username">Username</label>
          <input
            onChange={handleChange}
            value={formData.username}
            autoComplete="username"
            name="username"
            type="text"
            id="username"
            placeholder="Username"
            required
            className="border border-blue-400 hover:border-blue-600 p-2 rounded-md text-lg focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            value={formData.email}
            autoComplete="email"
            name="email"
            type="email"
            id="email"
            placeholder="email@one.com"
            required
            className="border border-blue-400 hover:border-blue-600 p-2 rounded-md text-lg focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            onChange={handleChange}
            value={formData.phone}
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            className="border border-blue-400 hover:border-blue-600 p-2 rounded-md text-lg focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            value={formData.password}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            className="border border-blue-400 hover:border-blue-600 p-2 rounded-md text-lg focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <div className="flex flex-col flex-wrap items-center">
          <label htmlFor="services">Services</label>
          {services.map((service, index) => (
            <div key={index} className="relative group">
              <input
                onChange={(e) => handleChange(e)}
                value={service}
                name="services"
                type="text"
                placeholder="Service"
                required
                className="border p-1 rounded-md focus:outline-none focus:ring focus:border-blue-400"
              />
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => handleRemoveService(index)}
                  className="inline-block bg-red-600 text-white p-1/4 rounded-md"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          {formData.services.length < 3 && (
            <button
              type="button"
              onClick={handleAddService}
              className="bg-green-700 text-sm text-white p-1/2 rounded-md"
            >
              Add
            </button>
          )}
        </div>

        <button className="bg-green-700 p-3 text-white font-bold" onClick={handleSubmit} type="submit">
          Sign Up
        </button>
        <div>
          Already have an account?{" "}
          <Link href="/login" className="text-decoration-line: underline">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}
