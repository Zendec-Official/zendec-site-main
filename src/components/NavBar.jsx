import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
        <img src="/logo.jpg" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <a
            href="#home"
            className="relative font-medium text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-white after:scale-x-100 after:origin-left after:transition-transform duration-300"
          >
            Home
          </a>
          <a
            href="C:\site\zendec-site-main\src\components\Portfolio.jsx"
            className="font-medium text-gray-300 hover:text-white transition"
          >
            Portfolio
          </a>
          <a
            href="#about"
            className="font-medium text-gray-300 hover:text-white transition"
          >
            About
          </a>
          <a
            href="#contact"
            className="font-medium text-gray-300 hover:text-white transition"
          >
            Contact
          </a>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <a
            href="zendec-site-main\src\components\ContactForm.jsx"
            className="bg-white text-black px-5 py-2 rounded-md font-medium hover:bg-gray-200 transition"
          >
            Get In Touch
          </a>
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
          <a
            href="#home"
            className="block font-medium text-white hover:text-gray-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#portfolio"
            className="block font-medium text-gray-300 hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </a>
          <a
            href="#about"
            className="block font-medium text-gray-300 hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="block font-medium text-gray-300 hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>

          <a
            href="#contact"
            className="inline-block mt-2 bg-white text-black px-5 py-2 rounded-md font-medium hover:bg-gray-200 transition"
            onClick={() => setMenuOpen(false)}
          >
            Get In Touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
