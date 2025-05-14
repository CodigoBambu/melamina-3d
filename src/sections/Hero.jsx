import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import bg1 from "../assets/bg1.webp";
import bg2 from "../assets/bg2.webp";
import bg3 from "../assets/bg3.webp";

const Hero = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [bg1, bg2, bg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header className="relative min-h-screen flex items-center">
      <section className="text-shadow flex">
        <div className="absolute inset-0 z-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === activeImage ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
              }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          ))}
        </div>
        <div className="container mx-auto px-4 z-10 relative flex items-center h-full">
          {" "}
          <div className="max-w-3xl stagger-animation">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Diseños Personalizados en Melamina
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Creamos espacios únicos con muebles a la medida, diseñados
              específicamente para ti
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="text-white bg-transparent backdrop-blur-sm hover:bg-[#5a4633]">
                Ver Catálogo
              </Button>
              <Button className="hover:bg-transparent text-white">
                Solicitar Diseño
              </Button>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
