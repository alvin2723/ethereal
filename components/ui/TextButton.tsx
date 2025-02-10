"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  color?: string;
  text: string;
  className?: string;
}

const TextButton = ({ color, text, className }: Props) => {
  const router = useRouter();
  return (
    <button
      className={cn(
        "text-sm font-inter uppercase font-semibold tracking-wider text-fuchsia-500",
        color === "lime" && "text-lime-500",
        color === "cyan" && "text-cyan-500",
        color === "violet" && "text-violet-500",
        className
      )}
      onClick={() => router.push("/")}
    >
      {text}
    </button>
  );
};

export default TextButton;
