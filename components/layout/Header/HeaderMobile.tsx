"use client";
import Hexagon from "@/components/ui/Hexagon";
import NavLink from "@/components/ui/NavLink";
import { navLink } from "@/lib/data";
import { motion } from "framer-motion";

interface Props {
  setIsOpen: (isOpen: boolean) => void;
}

const HeaderMobile = ({ setIsOpen }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
      }}
      className="fixed block lg:hidden size-full top-0 left-0 z-30 dark:bg-zinc-900 bg-zinc-300"
    >
      <div className="absolute inset-2 rounded-md dark:bg-zinc-800 bg-zinc-400 mt-24 md:mt-28 z-0">
        <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10">
          <Hexagon size={700} />
        </div>
        <div className="absolute top-1/2 left-full -translate-y-1/2 -translate-x-1/2 -z-10">
          <Hexagon size={1000} />
        </div>
        <div className="h-full flex justify-center items-center">
          <ul className="list-none flex flex-col items-center gap-12 md:gap-16">
            {navLink.map(({ title, link }, index) => (
              <NavLink
                key={title}
                index={index}
                title={title}
                link={link}
                titleClassName="text-4xl md:text-5xl font-semibold text-zinc-200 hover:text-zinc-300"
                animate
                handleOnClick={() => setIsOpen(false)}
              />
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default HeaderMobile;
