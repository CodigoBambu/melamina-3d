import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import beforeImage from "../assets/antes.webp";
import afterImage from "../assets/despues.webp";

const Design3D = () => {
  const [activeTab, setActiveTab] = useState("after");
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === "before" ? "after" : "before"));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const designProcess = [
    {
      step: 1,
      title: "Toma de Medidas",
      description:
        "Visitamos tu espacio y tomamos medidas detalladas para asegurar una instalación perfecta.",
    },
    {
      step: 2,
      title: "Diseño Personalizado",
      description:
        "Creamos un diseño adaptado a tus necesidades y preferencias estéticas.",
    },
    {
      step: 3,
      title: "Visualización 3D",
      description:
        "Te presentamos una visualización 3D para que apruebes el diseño antes de comenzar.",
    },
    {
      step: 4,
      title: "Fabricación e Instalación",
      description:
        "Fabricamos los muebles e instalamos en tu espacio, cuidando cada detalle.",
    },
  ];

  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Diseño 3D Personalizado
          </h2>
          <div className="w-16 h-1 bg-wood mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-white/80">
            Visualiza tus muebles antes de fabricarlos con nuestro servicio de
            diseño 3D
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative h-96 rounded-lg overflow-hidden box-shadow">
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  activeTab === "before" ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={beforeImage}
                  alt="Espacio antes del diseño"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">Antes</span>
                </div>
              </div>
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  activeTab === "after" ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={afterImage}
                  alt="Diseño 3D final"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">Después</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="stagger-animation">
              <h3 className="text-2xl font-bold mb-4">Proceso de Diseño</h3>
              <ul className="space-y-6">
                {designProcess.map((item) => (
                  <li key={item.step} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-wood text-white flex items-center justify-center font-bold text-center text-base box-shadow">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{item.title}</h4>
                      <p className="text-white/80">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button variant="primary" size="lg">
                  Solicitar Diseño 3D
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Design3D;
