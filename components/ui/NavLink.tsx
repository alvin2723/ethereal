"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  index: number;
  title: string;
  link: string;
  handleOnClick?: () => void;
  animate?: boolean;
  className?: string;
  titleClassName?: string;
}

const NavLink = ({
  index,
  title,
  link,
  handleOnClick,
  animate = false,
  className,
  titleClassName,
}: Props) => {
  return (
    <motion.li
      initial={animate && { opacity: 0, y: 20 }}
      animate={animate && { opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "linear",
        delay: 0.25 * index,
      }}
      className={cn("px-4 w-max", className)}
      onClick={handleOnClick}
    >
      <Link
        className={cn(
          "font-base font-inter font-medium dark:text-zinc-500 dark:hover:text-zinc-300 text-zinc-700 hover:text-zinc-950 transition duration-300",
          titleClassName
        )}
        href={link}
        // scroll={false}
      >
        {title}
      </Link>
    </motion.li>
  );
};

export default NavLink;
