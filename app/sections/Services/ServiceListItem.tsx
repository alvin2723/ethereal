import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
interface Props {
  className?: string;
  children: ReactNode;
}

const ServiceListItem = ({ className, children }: Props) => {
  return (
    <li className={cn("flex items-center gap-3", className)}>
      <div className="inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset-4 rounded-full outline-fuchsia-500/10">
        <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
      </div>
      {children}
    </li>
  );
};

export default ServiceListItem;
