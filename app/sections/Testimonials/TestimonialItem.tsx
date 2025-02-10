"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  index: number;
  text: string;
  name: string;
  title: string;
  avatarImg: string;
  className?: string;
}

const TestimonialItem = ({
  index,
  text,
  name,
  title,
  avatarImg,
  className,
}: Props) => {
  return (
    <motion.blockquote
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: index * 0.5,
        ease: "easeInOut",
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className={cn("lg:block", className)}
    >
      <p className="font-inter text-3xl lg:text-4xl font-bold">
        &ldquo;{text}&rdquo;
      </p>
      <cite className="mt-8 block">
        <div className="flex gap-3 items-center">
          <div>
            <div
              className="size-16 dark:bg-zinc-700 rounded-full bg-cover"
              style={{ backgroundImage: `url(${avatarImg})` }}
            ></div>
          </div>
          <div>
            <div className="text-lg not-italic font-semibold">{name}</div>
            <div className="dark:text-zinc-400 not-italic">{title}</div>
          </div>
        </div>
      </cite>
    </motion.blockquote>
  );
};

export default TestimonialItem;
