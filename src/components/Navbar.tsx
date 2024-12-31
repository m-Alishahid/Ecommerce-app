"use client";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartSharp } from "react-icons/io5";
import { FaClinicMedical } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <header className="bg-white shadow-sm border-b mx-auto flex flex-col">
      {/* Announcement Bar */}
      <div className="bg-blue-500 text-white py-2 text-sm flex justify-center items-center px-8">
        <div className="text-center flex-1">
          Free Shipping on Orders Over $50! Your Health, Our Priority.
          <a href="#" className="underline hover:text-slate-300 ml-2">Shop Now</a>
        </div>

        <div className="flex items-center gap-[2px]">
          <div className="text-white text-sm font-normal leading-[21px]">English</div>
          <span className="text-white text-3xl">
            <RiArrowDropDownLine />
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-blue-500 px-10 flex items-center">
          <span className="text-5xl mr-2 text-blue-700">
            <FaClinicMedical />
          </span>
          Medicraft
        </h1>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <span className="text-3xl cursor-pointer" onClick={toggleSidebar}>
            <HiMenu />
          </span>
        </div>

        {/* Main Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-slate-600 hover:text-black underline">
            Home
          </a>
          <a href="#" className="text-slate-600 hover:text-black underline">
            Shop
          </a>
          <a href="#" className="text-slate-600 hover:text-black underline">
            Health Tips
          </a>
          <a href="#" className="text-slate-600 hover:text-black underline">
            Contact
          </a>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center bg-slate-100 rounded-md px-3 py-2">
            <input
              type="text"
              placeholder="Search for medicines, health products..."
              className="bg-slate-100 outline-none text-sm"
            />
            <span>
              <CiSearch />
            </span>
          </div>
          <span className="cursor-pointer" title="Wishlist">
            <CiHeart />
          </span>
          <span className="cursor-pointer" title="Cart">
            <IoCartSharp />
          </span>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="flex justify-end p-4">
            <span className="text-white text-3xl cursor-pointer" onClick={toggleSidebar}>
              <AiOutlineClose />
            </span>
          </div>
          <div className="flex flex-col items-center justify-center h-full bg-white p-6">
            <a href="#" className="text-lg text-gray-800 py-4">
              Home
            </a>
            <a href="#" className="text-lg text-gray-800 py-4">
              Shop
            </a>
            <a href="#" className="text-lg text-gray-800 py-4">
              Health Tips
            </a>
            <a href="#" className="text-lg text-gray-800 py-4">
              Contact
            </a>
            <div className="mt-8 flex space-x-6">
              <span className="cursor-pointer text-xl" title="Wishlist">
                <CiHeart />
              </span>
              <span className="cursor-pointer text-xl" title="Cart">
                <IoCartSharp />
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
