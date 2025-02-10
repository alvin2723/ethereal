import ButtonWithOutline from "@/components/ui/ButtonWithOutline";
import ScrollMore from "@/components/ui/ScrollMore";
import ShapeWIthAnimation from "./ShapeWIthAnimation";
import React from "react";

const Hero = () => {
  return (
    <section className="py-20 md:py-60 lg:py-56 overflow-x-clip">
      <div className="container">
        <h1 className="font-inter font-black text-5xl md:text-6xl lg:text-7xl text-center w-full max-w-3xl mx-auto">
          The Future of Blockchain is Here
        </h1>
        <p className="text-center text-xl md:text-2xl mt-6 w-full max-w-xl mx-auto dark:text-zinc-400 text-zinc-700">
          Empowering you with secure, transparent, and seamless financial
          solutions on the blockchain. Take control of your assets with
          Ethereal.
        </p>
        <div className="flex justify-center mt-10">
          <ButtonWithOutline text="Get Started" />
        </div>
        <ShapeWIthAnimation />
        <ScrollMore />
      </div>
    </section>
  );
};

export default Hero;
