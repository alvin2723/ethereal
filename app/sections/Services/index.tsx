"use client";
import ButtonWithOutline from "@/components/ui/ButtonWithOutline";
import ServiceListItem from "@/app/sections/Services/ServiceListItem";
import TextButton from "@/components/ui/TextButton";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Services = () => {
  const knotRef = useRef(null);
  const firstHemiSphereRef = useRef(null);
  const coneRef = useRef(null);
  const secondHemiSphereRef = useRef(null);

  const { scrollYProgress: knotScrollYProgress } = useScroll({
    target: knotRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: firstHemisphereScrollYProgress } = useScroll({
    target: firstHemiSphereRef,
    offset: ["start end", "end start"],
  });

  const knotTranslateY = useTransform(knotScrollYProgress, [0, 1], [100, -100]);
  const knotRotate = useTransform(knotScrollYProgress, [0, 1], [30, -30]);

  const firstHemisphereTranslateY = useTransform(
    firstHemisphereScrollYProgress,
    [0, 1],
    [50, -50]
  );
  const firstHemisphereRotate = useTransform(
    firstHemisphereScrollYProgress,
    [0, 1],
    [-20, -50]
  );

  const { scrollYProgress: coneScrollYProgress } = useScroll({
    target: coneRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: secondHemisphereScrollYProgress } = useScroll({
    target: secondHemiSphereRef,
    offset: ["start end", "end start"],
  });

  const coneTranslateY = useTransform(coneScrollYProgress, [0, 1], [100, -100]);
  const coneRotate = useTransform(coneScrollYProgress, [0, 1], [12, 45]);

  const secondHemisphereTranslateY = useTransform(
    secondHemisphereScrollYProgress,
    [0, 1],
    [50, -50]
  );
  const secondHemisphereRotate = useTransform(
    secondHemisphereScrollYProgress,
    [0, 1],
    [-20, 10]
  );

  return (
    <section id="services" className="py-20 overflow-x-clip scroll-mt-20">
      <div className="container">
        <div className="flex flex-col gap-48 lg:gap-64">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2">
              <h2 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl">
                Empowering the Cutting-Edge Financial Services
              </h2>
              <p className="text-xl lg:text-2xl dark:text-zinc-400 mt-8">
                Ethereal provides innovative Web3 financial services to help you
                maximize your digital assets with ease.
              </p>
              <ul className="flex flex-col gap-8 mt-12">
                <ServiceListItem>
                  <span className="text-xl font-bold">
                    Easily manage assets across different blockchains.
                  </span>
                </ServiceListItem>
                <ServiceListItem>
                  <span className="text-xl font-bold">
                    You hold the private keys, ensuring full ownership.
                  </span>
                </ServiceListItem>
                <ServiceListItem>
                  <span className="text-xl font-bold">
                    Stay on top of your investments in real time.
                  </span>
                </ServiceListItem>
              </ul>
              <div className="flex gap-8 mt-12">
                <ButtonWithOutline text="Get Started" />
                <TextButton text="Learn More" />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative inline-flex z-0">
                <motion.div
                  className="size-96 relative"
                  ref={knotRef}
                  style={{
                    y: knotTranslateY,
                    rotate: knotRotate,
                  }}
                >
                  <Image
                    src={"/assets/images/torus-knot.png"}
                    alt="Trous Knot Image"
                    fill
                    className="max-w-none"
                  />
                </motion.div>
                <motion.div
                  className="absolute size-96 top-3/4 -z-10 scale-x-[-1]"
                  ref={firstHemiSphereRef}
                  style={{
                    y: firstHemisphereTranslateY,
                    rotate: firstHemisphereRotate,
                  }}
                >
                  <Image
                    src={"/assets/images/hemisphere.png"}
                    alt="Hemisphere Image"
                    fill
                  />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative hidden md:block">
              <div className="absolute right-0 z-0">
                <motion.div
                  className="size-96 relative"
                  ref={coneRef}
                  style={{
                    y: coneTranslateY,
                    rotate: coneRotate,
                  }}
                >
                  <Image
                    src={"/assets/images/cone.png"}
                    alt="Cone Image"
                    fill
                    className="max-w-none"
                  />
                </motion.div>

                <motion.div
                  className="size-96 absolute top-3/4 -z-10 left-0"
                  ref={secondHemiSphereRef}
                  style={{
                    y: secondHemisphereTranslateY,
                    rotate: secondHemisphereRotate,
                  }}
                >
                  <Image
                    src={"/assets/images/hemisphere.png"}
                    alt="Hemisphere Image"
                    fill
                  />
                </motion.div>
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl">
                Ethereal leads the way.
              </h2>
              <p className="text-xl lg:text-2xl dark:text-zinc-400 mt-8">
                Ethereal provide you with secure and high-yield strategies to
                decentralized investment opportunities
              </p>
              <ul className="flex flex-col gap-8 mt-12">
                <ServiceListItem>
                  <span className="text-xl font-bold">
                    Earn rewards by holding and securing network tokens
                  </span>
                </ServiceListItem>
                <ServiceListItem>
                  <span className="text-xl font-bold">
                    Maximize returns through liquidity pools.
                  </span>
                </ServiceListItem>
                <ServiceListItem>
                  <span className="text-xl font-bold">
                    Access crypto loans without intermediaries.
                  </span>
                </ServiceListItem>
              </ul>
              <div className="flex gap-8 mt-12">
                <ButtonWithOutline text="Get Started" />
                <TextButton text="Learn More" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
