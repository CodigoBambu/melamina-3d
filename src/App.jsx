import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import FeaturedProducts from "./sections/FeaturedProducts";
import Design3D from "./sections/Design3D";
import Contact from "./sections/Contact";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const design3DRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: design3DRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          gsap.to("body", {
            backgroundColor: "#222",
            color: "#ffffff",
            duration: 0.5,
          });
        },
        onLeaveBack: () => {
          gsap.to("body", {
            backgroundColor: "#f8f8f8",
            color: "#000000",
            duration: 0.5,
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <section id="inicio">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="products">
        <FeaturedProducts />
      </section>
      <section id="design" ref={design3DRef}>
        <Design3D />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
