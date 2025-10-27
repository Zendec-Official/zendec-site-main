import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom"; // ✅ make sure you're using react-router-dom

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // ✅ detect current route

  // Helper to check active path
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-black text-white px-8 py-4 fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.jpg" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <Link
            to="/"
            className={`relative font-medium transition ${
              isActive("/")
                ? "text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:scale-x-100"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Home
          </Link>

          <Link
            to="/portfolio"
            className={`relative font-medium transition ${
              isActive("/portfolio")
                ? "text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:scale-x-100"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Portfolio
          </Link>

          <Link
            to="/about"
            className={`relative font-medium transition ${
              isActive("/about")
                ? "text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:scale-x-100"
                : "text-gray-300 hover:text-white"
            }`}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={`relative font-medium transition ${
              isActive("/contact")
                ? "text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:scale-x-100"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="bg-white text-black px-5 py-2 rounded-md font-medium hover:bg-gray-200 transition"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          <Link
            to="/"
            className={`block font-medium transition ${
              isActive("/") ? "text-white" : "text-gray-300 hover:text-white"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className={`block font-medium transition ${
              isActive("/portfolio")
                ? "text-white"
                : "text-gray-300 hover:text-white"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            className={`block font-medium transition ${
              isActive("/about") ? "text-white" : "text-gray-300 hover:text-white"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`block font-medium transition ${
              isActive("/contact")
                ? "text-white"
                : "text-gray-300 hover:text-white"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            to="/contact"
            className="inline-block mt-2 bg-white text-black px-5 py-2 rounded-md font-medium hover:bg-gray-200 transition"
            onClick={() => setMenuOpen(false)}
          >
            Get In Touch
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
