import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

const HamburgerMenu = ({ setIsOpen, isOpen }: Props) => {
  return (
    <div
      className="size-10 relative lg:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className={cn(
            "w-5 h-0.5 dark:bg-zinc-300 bg-zinc-500 -translate-y-1 transition-all duration-300",
            isOpen && "translate-y-0 rotate-45"
          )}
        ></div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className={cn(
            "w-5 h-0.5 dark:bg-zinc-300 bg-zinc-500 translate-y-1 transition-all duration-300",
            isOpen && "translate-y-0 -rotate-45"
          )}
        ></div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
