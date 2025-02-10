"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  handleOnClick?: () => void;
  className?: string;
}

const IconButton = ({
  handleOnClick,
  className,
  children,
  ...props
}: Props) => {
  return (
    <button
      className={cn("relative", className)}
      onClick={handleOnClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
