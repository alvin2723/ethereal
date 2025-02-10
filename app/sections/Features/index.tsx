"use client";
import { featureCardData } from "@/lib/data";
import React, { useEffect, useState } from "react";
import FeatureIndicator from "./FeatureIndicator";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timeoutId = setTimeout(() => {
      setSelectedCard((curr) =>
        curr === featureCardData.length - 1 ? 0 : curr + 1
      );
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [selectedCard, isHovered]);

  return (
    <section
      id="features"
      className="py-20 overflow-x-clip md:-mt-20 scroll-mt-20"
    >
      <div className="container">
        <h2 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl text-center">
          Discover the key benefits of Ethereal and take control of your
          financial future
        </h2>
        <div className="mt-32 lg:mt-40 flex ">
          <div className="flex flex-none gap-8">
            {featureCardData.map((data) => (
              <div
                key={data.title}
                className="inline-flex transition-all duration-500"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  transform: `translateX(calc((-100% - 2rem) * ${selectedCard}))`,
                }}
              >
                <FeatureCard
                  image={data.image}
                  title={data.title}
                  desc={data.desc}
                  color={data.color}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <div className="dark:bg-zinc-950 bg-zinc-600 inline-flex gap-4 p-2.5 rounded-full">
            {featureCardData.map((_, index) => (
              <FeatureIndicator
                key={index}
                index={index}
                setSelectedCard={setSelectedCard}
                className={(index === selectedCard && "bg-zinc-300") || ""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
