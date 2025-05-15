import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Settings,
  ShoppingBag,
  Package,
  Phone,
  Rotate3D,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio", icon: <Home size={20} /> },
    { name: "Servicios", href: "#services", icon: <Settings size={20} /> },
    { name: "Productos", href: "#products", icon: <ShoppingBag size={20} /> },
    { name: "Diseños 3D", href: "#design", icon: <Package size={20} /> },
    { name: "Contacto", href: "#contact", icon: <Phone size={20} /> },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300">
      <div
        className={`w-full transition-all duration-300 ${
          scrolled || isMenuOpen
            ? "box-shadow bg-black/20 backdrop-blur-lg py-4"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <a
              href="#inicio"
              className="text-white text-lg font-bold flex hover:text-[#da9f70] hover:scale-105 transition-all duration-500"
            >
              Melamina 3D <Rotate3D className="ml-2" />
            </a>
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-[#da9f70] hover:scale-105 transition-all duration-500 font-medium flex items-center gap-2"
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </div>
            <button
              className="md:hidden text-white p-2 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
              isMenuOpen
                ? "max-h-[500px] opacity-100 scale-y-100 mt-4"
                : "max-h-0 opacity-0 scale-y-0"
            }`}
          >
            <div className="flex flex-col space-y-4 py-4 px-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-[#da9f70] transition-colors duration-300 font-medium py-2 flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
