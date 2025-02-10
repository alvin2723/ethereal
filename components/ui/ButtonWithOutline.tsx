"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  text: string;
  className?: string;
}

const ButtonWithOutline = ({ text, className }: Props) => {
  const router = useRouter();
  return (
    <button
      className={cn(
        "bg-fuchsia-500/20 px-4 py-2 font-bold uppercase font-inter text-sm tracking-wide relative rounded-lg overflow-hidden",
        className
      )}
      onClick={() => router.push("/")}
    >
      <div className="absolute inset-0 outline outline-2 -outline-offset-2 outline-fuchsia-500 rounded-lg"></div>

      <span className="leading-6">{text}</span>
    </button>
  );
};

export default ButtonWithOutline;
