"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  animate?: boolean;
  className?: string;
}

const Circle = ({ animate = false, className, children }: Props) => {
  return (
    <div
      className={cn(
        "dark:bg-zinc-900 bg-zinc-200 size-[200px] inline-flex rounded-full items-center justify-center relative",
        className
      )}
    >
      <motion.div
        animate={
          animate && {
            rotate: 360,
          }
        }
        transition={{
          ease: "linear",
          duration: 15,
          repeat: Infinity,
        }}
        className={cn(
          "outline -outline-offset-4 outline-fuchsia-500/10 absolute inset-0 rounded-full border-[6px] border-red-500 border-transparent",
          animate && "border-t-fuchsia-500/30"
        )}
      />
      {children}
    </div>
  );
};

export default Circle;
