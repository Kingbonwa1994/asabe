import React from 'react';
import ServiceCard from './ServiceCard';



export default function ServicesGrid() {
  const services =[
    {
      id: 1,
      title: "Painting",
      image: "/icons/painter.png",
      description:
        "Our painting service offers professional interior and exterior painting for homes and businesses.",
    },
    {
      id: 2,
      title: "Gardening",
      image: "/icons/gardener.png",
      description:
        "Transform your outdoor space with our expert gardening services, including landscaping and maintenance.",
    },
    {
      id: 3,
      title: "Swimming Pool",
      image: "/icons/swimming.png",
      description:
        "Enjoy a pristine and well-maintained swimming pool with our pool cleaning and maintenance services.",
    },
    {
      id: 4,
      title: "Solar Energy",
      image: "/icons/solar.png",
      description:
        "Harness the power of the sun with our solar energy solutions, including installation and maintenance of solar panels.",
    },
    {
      id: 5,
      title: "Plumbing",
      image: "/icons/plumber.png",
      description:
        "From leak repairs to plumbing installations, our expert plumbers have you covered for all your plumbing needs.",
    },
    {
      id: 6,
      title: "Electrical",
      image: "/icons/electrician.png",
      description:
        "Ensure the safety and functionality of your electrical systems with our comprehensive electrical services.",
    },
    {
      id: 7,
      title: "Roofing",
      image: "/icons/roofing.png",
      description:
        "Protect your property from the elements with our top-notch roofing services, including repairs and installations.",
    },
    {
      id: 8,
      title: "Carpentry",
      image: "/icons/carpentry.png",
      description:
        "Custom woodworking and carpentry services to enhance your indoor and outdoor spaces.",
    },
    {
      id: 9,
      title: "HVAC Services",
      image: "/icons/hvca.png",
      description:
        "Keep your space comfortable year-round with our heating, ventilation, and air conditioning services.",
    },
    {
      id: 10,
      title: "Interior Design",
      image: "/icons/interior_design.png",
      description:
        "Elevate your living and working spaces with our professional interior design and decoration services.",
    },
    {
      id: 11,
      title: "Fencing",
      image: "/icons/fencing.png",
      description:
        "Enhance privacy and security with our fencing solutions, available in various styles and materials.",
    },
    {
      id: 12,
      title: "Masonry",
      image: "/icons/masonry.png",
      description:
        "Our masonry services encompass brickwork, stone masonry, and more for sturdy and appealing structures.",
    },
    {
      id: 13,
      title: "Flooring",
      image: "/icons/flooring.png",
      description:
        "Revitalize your floors with our flooring services, including installation, refinishing, and repairs.",
    },
    {
      id: 14,
      title: "Home Security",
      image: "/icons/home_security.png",
      description:
        "Secure your home with our advanced home security systems, including cameras, alarms, and monitoring.",
    },
    {
      id: 15,
      title: "Junk Removal",
      image: "/icons/junk_removal.png",
      description:
        "Get rid of unwanted clutter and debris with our efficient and eco-friendly junk removal services.",
    },
    {
      id: 16,
      title: "Window Cleaning",
      image: "/icons/window_cleaning.png",
      description:
        "Achieve crystal-clear windows with our professional window cleaning services for residential and commercial spaces.",
    },
    {
      id: 17,
      title: "Pest Control",
      image: "/icons/pest_control.png",
      description:
        "Eliminate pests and ensure a pest-free environment with our safe and effective pest control solutions.",
    },
    {
      id: 18,
      title: "Pressure Wash...",
      image: "/icons/pressure_washing.png",
      description:
        "Restore the appearance of your surfaces with our high-pressure washing services for driveways, decks, and more.",
    },
    {
      id: 19,
      title: "Home Renovation",
      image: "/icons/home_renovation.png",
      description:
        "Transform your home with our comprehensive renovation services, from remodeling to structural improvements.",
    },
    {
      id: 20,
      title: "Appliance Repair",
      image: "/icons/appliance_repair.png",
      description:
        "Repair and maintain your household appliances to ensure they're running smoothly and efficiently.",
    },
  ];





  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6  gap-4">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          id={service.id}
          imageUrl={service.image}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );}