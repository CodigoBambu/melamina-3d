import React from "react";
import Button from "../components/Button";
import escritorioEjecutivo from "../assets/escritorioEjecutivo.webp";
import tocadorEspejo from "../assets/tocadorEspejo.webp";
import muebleTvFlotante from "../assets/muebleTvFlotante.webp";
import armarioEmpotrado from "../assets/armarioEmpotrado.webp";

const products = [
  {
    id: 1,
    name: "Escritorio Ejecutivo Moderno",
    description:
      "Escritorio amplio con cajones y espacio para monitor. Perfecto para home office.",
    imageUrl: escritorioEjecutivo,
    price: "Consultar precio",
    category: "Escritorios",
  },
  {
    id: 2,
    name: "Tocador con Espejo",
    description:
      "Tocador elegante con espejo y cajones para organizar tus productos de belleza.",
    imageUrl: tocadorEspejo,
    price: "Consultar precio",
    category: "Tocadores",
  },
  {
    id: 3,
    name: "Mueble de TV Flotante",
    description:
      "Mueble de TV minimalista con espacio para equipos multimedia y acabado elegante.",
    imageUrl: muebleTvFlotante,
    price: "Consultar precio",
    category: "Sala",
  },
  {
    id: 4,
    name: "Armario Empotrado",
    description:
      "Armario amplio con diversas divisiones y espacio de almacenamiento personalizado.",
    imageUrl: armarioEmpotrado,
    price: "Consultar precio",
    category: "Armarios",
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col h-full cursor-pointer">
      <div className="h-64 overflow-hidden ">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <span className="text-sm font-medium text-wood-dark block mb-1">
          {product.category}
        </span>
        <h3 className="text-xl font-bold text-navy mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-navy font-semibold">{product.price}</span>
          <Button className="bg-transparent hover:bg-amber-900/80 text-black hover:scale-110 hover:text-white hover:text-shadow">
            Consultar
          </Button>
        </div>
      </div>
    </div>
  );
};

const FeaturedProducts = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-3">
            Productos Destacados
          </h2>
          <div className="w-50 h-1 bg-amber-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de muebles listos para la entrega
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="text-white hover:bg-transparent hover:text-black">
            Ver Catálogo Completo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
