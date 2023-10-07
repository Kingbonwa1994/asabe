"use client"
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useRef, useEffect } from "react";

export const navLinks = [
  {
    id: "/profile",
    title: "Service Provider",
  },
  {
    id: "/aboutus",
    title: "About Us",
  },
  {
    id: "/register",
    title: "Join",
  },
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  // Create a ref to the sidebar element
  const sidebarRef = useRef(null);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setToggle((prevState) => !prevState);
  };

  // Function to close the sidebar when clicking outside of it
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setToggle(false);
    }
  };

  // Add a click event listener to the document to handle clicks outside the sidebar
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  return (
    <nav  className="w-full flex py-6 justify-between items-center navbar gradientAnimation 10s linear infinite linear-gradient(45deg, gray-600, gray-400)">
      <Link href={'/'} className="text-3xl font-bold text-blue-600 hover:text-blue-800 transition duration-300 ">1cliQ
      </Link>
      {/* Desktop Navigation */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] h-auto max-w-full rounded-lg ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div
          className="w-[20px] h-[20px] object-contain cursor-pointer"
          onClick={toggleSidebar}
        >
          {toggle ? (
            <CloseIcon style={{ color: "white" }} /> // CloseIcon
          ) : (
            <MenuIcon style={{ color: "white" }} /> // MenuIcon
          )}
        </div>
            {/* Sidebar */}
      <div
        className={`${
          toggle ? "block" : "hidden"
        } p-6 bg-slate-300 fixed right-0 h-200 top-16 min-w-[140px] rounded-xl sidebar z-50`}
      >
        <ul className="list-none flex justify-end items-start flex-1 flex-col">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === nav.title ? "text-black" : "text-black"
              } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              onClick={() => {
                setActive(nav.title);
                setToggle(false); // Close the sidebar when a link is clicked
              }}
            >
              <Link href={`${nav.id}`}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </div>
   
      </div>
      
    </nav>
  );
};

export default Navbar;