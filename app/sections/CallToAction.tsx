"use client";
import ButtonWithOutline from "@/components/ui/ButtonWithOutline";
import Circle from "@/components/ui/Circle";
import Hexagon from "@/components/ui/Hexagon";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const CallToAction = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [45, -45]);

  return (
    <section id="cta" className="py-60 overflow-hidden" ref={sectionRef}>
      <div className="container">
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon size={700} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon size={1000} reverse duration={50} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute left-0 -top-[400px]" animate>
              <motion.div className="size-[100px] relative" style={{ rotate }}>
                <Image
                  src={"/assets/images/cuboid.png"}
                  fill
                  alt="Cuboid Image"
                />
              </motion.div>
            </Circle>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute -left-[550px] -top-[70px]" animate>
              <motion.div className="size-[100px] relative" style={{ rotate }}>
                <Image
                  src={"/assets/images/cylinder.png"}
                  fill
                  alt="Cuboid Image"
                />
              </motion.div>
            </Circle>
          </div>
          <h2 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl text-center md:max-w-xl lg:max-w-2xl mx-auto">
            Ready to embrace the future of finance?
          </h2>
          <p className="text-xl lg:text-2xl text-zinc-400 text-center mt-8 max-w-sm mx-auto">
            Join Ethereal today and take control of your financial freedom.
          </p>
          <div className="flex justify-center mt-12">
            <ButtonWithOutline text="Get Started" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
