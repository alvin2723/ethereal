"use client";
import Circle from "@/components/ui/Circle";
import Hexagon from "@/components/ui/Hexagon";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ShapeWIthAnimation = () => {
  const hedronRef = useRef(null);
  const cubeRef = useRef(null);
  const torusRef = useRef(null);
  const cuboRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: hedronRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: cubeScrollYProgress } = useScroll({
    target: cubeRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: torusScrollYProgress } = useScroll({
    target: torusRef,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: cuboScrollYProgress } = useScroll({
    target: cuboRef,
    offset: ["start end", "end start"],
  });

  const hedronRotate = useTransform(scrollYProgress, [0, 1], [30, -45]);
  const cubeRotate = useTransform(cubeScrollYProgress, [0, 1], [100, -45]);
  const torusRotate = useTransform(torusScrollYProgress, [0, 1], [20, -20]);
  const cuboRotate = useTransform(cuboScrollYProgress, [0, 1], [20, -20]);
  return (
    <div className="flex justify-center mt-24">
      <div className="inline-flex relative z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Hexagon size={1000} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Hexagon size={1800} reverse duration={60} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Circle className="absolute left-[200px] -top-[900px]" animate>
            <motion.div
              className="inline-flex size-[100px]"
              style={{ rotate: cubeRotate }}
              ref={cubeRef}
            >
              <Image src={"/assets/images/cube.png"} alt="Cube Image" fill />
            </motion.div>
          </Circle>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Circle className=" absolute left-[200px] top-[250px]" animate>
            <motion.div
              className="inline-flex size-[100px]"
              style={{ rotate: cuboRotate }}
              ref={cuboRef}
            >
              <Image src={"/assets/images/cuboid.png"} alt="Cube Image" fill />
            </motion.div>
          </Circle>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Circle className=" absolute -left-[550px] -top-[80px]">
            <motion.div
              className="inline-flex size-[100px]"
              style={{ rotate: torusRotate }}
              ref={torusRef}
            >
              <Image src={"/assets/images/torus.png"} alt="Cube Image" fill />
            </motion.div>
          </Circle>
        </div>
        <motion.div
          className="inline-flex"
          style={{ rotate: hedronRotate }}
          ref={hedronRef}
        >
          <Image
            src={"/assets/images/icosahedron.png"}
            alt="Icosahedron Image"
            width={500}
            height={500}
            className="w-[calc(100%+100px)] max-w-none  absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%]  brightness-[4%] hure-rotate-[240deg]"
          />
          <Image
            src={"/assets/images/icosahedron.png"}
            alt="Icosahedron Image"
            width={500}
            height={500}
            className="lg:w-[500px] h-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ShapeWIthAnimation;
