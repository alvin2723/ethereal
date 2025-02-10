"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  index: number;
  setSelectedCard: (selectedCard: number) => void;
  className?: string;
}

const FeatureIndicator = ({ index, setSelectedCard, className }: Props) => {
  return (
    <div
      className={cn(
        "size-2.5 bg-zinc-500 rounded-full cursor-pointer",
        className
      )}
      onClick={() => setSelectedCard(index)}
    ></div>
  );
};

export default FeatureIndicator;
