import React, { useState } from "react";
import { Ruler, PenTool, Home } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Ruler className="w-12 h-12 mb-4 text-wood" />,
      title: "Medidas Exactas",
      description:
        "Visitamos tu espacio y tomamos las medidas exactas para asegurar que tu mueble se adapte perfectamente.",
    },
    {
      icon: <PenTool className="w-12 h-12 mb-4 text-wood" />,
      title: "Diseño 3D",
      description:
        "Creamos un diseño 3D de tu proyecto para que visualices cómo quedará el mueble antes de fabricarlo.",
    },
    {
      icon: <Home className="w-12 h-12 mb-4 text-wood" />,
      title: "Instalación Profesional",
      description:
        "Nuestro equipo de profesionales se encarga de la instalación de tus muebles, garantizando un acabado perfecto.",
    },
  ];

  const [hoveredService, setHoveredService] = useState(null);

  return (
    <section className="py-20 bg-offwhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Nuestros Servicios
          </h2>
          <div className="w-16 h-1 bg-wood mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Ofrecemos un servicio completo para crear muebles personalizados que
            se adapten perfectamente a tus espacios
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-lg  cursor-pointer shadow-lg transition-all duration-300 hover:shadow-2xl ${
                hoveredService === index ? "transform -translate-y-2" : ""
              }`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-bold mb-3 text-navy">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
