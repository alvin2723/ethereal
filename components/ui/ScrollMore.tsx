"use client";
import React from "react";
import { motion } from "framer-motion";

const ScrollMore = () => {
  return (
    <div className="flex justify-center flex-col items-center mt-40 md:mt-80 gap-4">
      <div className="h-10 w-5 outline outline-[4px] outline-fuchsia-500/10 inline-flex justify-center pt-2 rounded-full">
        <motion.div
          animate={{
            y: 12,
            opacity: 0.2,
          }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="h-3 w-1 bg-fuchsia-500 rounded-full"
        ></motion.div>
      </div>
      <p className="uppercase dark:text-zinc-500 text-zinc-700 font-bold tracking-wider">
        Scroll to learn more
      </p>
    </div>
  );
};

export default ScrollMore;
