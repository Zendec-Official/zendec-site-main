import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 border-t border-gray-700">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        
        {/* Logo + Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
          <img src="/logo.jpg" alt="Zendec Logo" className="h-10 w-auto mr-2" />          
          <span className="text-xl tracking-wider font-urbanist">ZENDEC</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            At Zendec, our vision is to redefine how brands connect with people
            through impactful, modern, and meaningful digital experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#portfolio" className="hover:text-white">Portfolio / Templates</a></li>
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Follow Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center space-x-2">
              <Linkedin size={18} />
              <a href="#" className="hover:text-white">LinkedIn</a>
            </li>
            <li className="flex items-center space-x-2">
              <Instagram size={18} />
              <a href="#" className="hover:text-white">Instagram</a>
            </li>
            <li className="flex items-center space-x-2">
              <Twitter size={18} />
              <a href="#" className="hover:text-white">Twitter</a>
            </li>
            <li className="flex items-center space-x-2">
              <Youtube size={18} />
              <a href="#" className="hover:text-white">YouTube</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Contact</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>Mangalore, India</li>
            <li>support@zendec.in</li>
            <li>8073532865</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        © 2025 Zendec. All Rights Reserved.
      </div>
    </footer>
  );
}
