"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  const buttonStyle =
    "flex items-center px-4 py-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-blue-600 hover:text-white transition-all duration-200";

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 z-50 transition-colors">
      {/* desktop view */}
      <div className="max-w-7xl mx-auto  flex justify-between items-center h-16">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          NextShop
        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-3">
          <Link href="/" className={buttonStyle}>
            Home
          </Link>
          <Link href="/products" className={buttonStyle}>
            Products
          </Link>
          <Link href="/add-product" className={buttonStyle}>
            Add Product
          </Link>
          {/* <Link href="/profile" className={buttonStyle}>
            Profile
          </Link> */}
        </div>

        <div className="hidden md:flex items-center gap-6 ">
          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} className="cursor-pointer">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={toggleProfile}
              className={` flex items-center cursor-pointer`}
            >
              <FaUserCircle size={24} />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                <Link
                  href="/login"
                  className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-600 hover:text-white transition-all duration-200 rounded-lg"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-600 hover:text-white transition-all duration-200 rounded-lg"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleDarkMode} className={buttonStyle + " mr-2"}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={toggleMenu} className={buttonStyle}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex flex-col px-4 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
              NextShop
            </span>
            <button onClick={toggleMenu} className={buttonStyle}>
              <FaTimes size={24} />
            </button>
          </div>

          {/* Profile Section below logo */}
          <div className="mt-4">
            <button
              onClick={toggleProfile}
              className={buttonStyle + " w-full text-left"}
            >
              <FaUserCircle size={20} className="mr-2" /> Profile
            </button>
            {profileOpen && (
              <div className="mt-2 flex flex-col space-y-2">
                <Link
                  href="/login"
                  className={buttonStyle + " text-left"}
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className={buttonStyle + " text-left"}
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Main Menu Links */}
        <div className="flex flex-col mt-4 px-4 space-y-2">
          <Link
            href="/"
            className={buttonStyle + " text-left"}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={buttonStyle + " text-left"}
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/add-product"
            className={buttonStyle + " text-left"}
            onClick={() => setMenuOpen(false)}
          >
            Add Product
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-30"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}
