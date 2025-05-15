import React, { useState } from "react";
import img1 from "../assets/antes.webp";
import img2 from "../assets/bg1.webp";
import img3 from "../assets/bg3.webp";

const images = [img1, img2, img3];

const Contact = () => {
  const [currentImage, setCurrentImage] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="contacto"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 gap-20 bg-[#2c2b2b] text-white"
    >
      <div className="w-full md:w-1/2 max-w-lg bg-[#3a3a3a] p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#da9f70]">
          Solicita tu diseño personalizado
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Tipo de mueble</label>
            <select className="w-full p-3 rounded-md bg-[#444] text-white">
              <option>Escritorios</option>
              <option>Tocadores</option>
              <option>Sala</option>
              <option>Libreros</option>
              <option>Armarios</option>
              <option>Dormitorio</option>
              <option>Cocina</option>
              <option>Solo El Diseño 3D</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Correo electrónico</label>
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              className="w-full p-3 rounded-md bg-[#444] text-white"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Número de teléfono</label>
            <input
              type="tel"
              placeholder="+593 987654321"
              className="w-full p-3 rounded-md bg-[#444] text-white"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">
              Descripción del mueble
            </label>
            <textarea
              rows="4"
              placeholder="Ej. Quiero un escritorio de 1.20m x 0.60m con espacio para PC"
              className="w-full p-3 rounded-md bg-[#444] text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#da9f70] text-black font-bold py-3 rounded-md hover:bg-[#c88c5c] transition"
          >
            Enviar solicitud
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 max-w-xl">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden box-shadow">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Diseño ${index}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
