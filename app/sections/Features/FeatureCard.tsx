"use client";
import TextButton from "@/components/ui/TextButton";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  title: string;
  desc: string;
  color: string;
}

const FeatureCard = ({ image, title, desc, color }: Props) => {
  return (
    <div className="relative z-0 p-8 md:p-10 max-w-xs md:max-w-md group">
      <div className="absolute -z-10 inset-0 dark:bg-zinc-800 bg-zinc-300 rounded-2xl"></div>
      <div className="flex justify-center -mt-28">
        <div className="inline-flex relative">
          <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)] group-hover:bg-zinc-950/30 transition duration-300"></div>
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="size-40 group-hover:-translate-y-6 transition duration-300"
          />
        </div>
      </div>

      <h3 className="font-inter font-bold text-3xl mt-12">{title}</h3>
      <p className="text-lg dark:text-zinc-400 mt-4">{desc}</p>
      <div className="flex items-center justify-between mt-12">
        <TextButton text="Learn More" color={color} />
        <MoveRight className="size-8 text-zinc-500 group-hover:text-zinc-300 transition duration-300 -translate-x-2 group-hover:translate-x-0" />
      </div>
    </div>
  );
};

export default FeatureCard;
