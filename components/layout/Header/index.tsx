"use client";
import React, { useEffect, useState } from "react";
import NavLink from "../../ui/NavLink";
import HeaderMobile from "./HeaderMobile";
import ButtonWithOutline from "@/components/ui/ButtonWithOutline";
import { navLink } from "@/lib/data";
import HamburgerMenu from "@/components/ui/HamburgerMenu";
import { AnimatePresence } from "framer-motion";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <header className="w-full sticky top-0 dark:bg-zinc-900/50 bg-zinc-300/50 backdrop-blur-lg z-[99]">
        <nav className="container">
          <div className="flex justify-between py-6 items-center md:py-8 lg:py-12">
            <Link
              href={"/"}
              className="text-2xl font-inter font-bold dark:text-zinc-400 text-zinc-950"
            >
              ETHEREAL
            </Link>
            <div className="flex items-center justify-center gap-4 lg:gap-0">
              <ul className="hidden lg:flex items-center justify-center list-none">
                {navLink.map(({ title, link }, index) => (
                  <NavLink
                    key={title}
                    index={index}
                    title={title}
                    link={link}
                  />
                ))}
              </ul>
              <div className="flex items-center justify-center gap-4 lg:border-l dark:border-l-zinc-500 border-l-zinc-700 lg:pl-4">
                <ThemeSwitcher />
                <ButtonWithOutline
                  text="Get Started"
                  className="hidden md:inline-flex "
                />
              </div>

              <HamburgerMenu setIsOpen={setIsOpen} isOpen={isOpen} />
            </div>
          </div>
        </nav>
      </header>
      <AnimatePresence>
        {isOpen && <HeaderMobile setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
