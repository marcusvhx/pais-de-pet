"use client";
import logo from "@/public/png/logo-pais-de-pet.png";
import Image from "next/image";
import Search from "./utils/Search";
import { Menu } from "lucide-react";
import SideBar from "./SideBar";
import { useState } from "react";

export default function Header({}: {}) {
  const [isOpen, setIsOpen] = useState(false);
  const sideBarToggle = (filter: string, classname: string) => {
    if (classname.includes(filter)) {
      setIsOpen((old) => !old);
      const body = document.body.style;
      body.overflow = body.overflow == "" ? "hidden" : "";
    }
  };

  return (
    <header className="p-2 sticky top-0 z-10 w-full h-16 flex items-center justify-around gap-2 bg-gradient-to-tl from-yellow to-tanjerina">
      <Image alt="logo pais de pet" src={logo} className="w-20" />
      <Search />
      <div
        onClick={(e) => sideBarToggle("toggle", e.currentTarget.className)}
        className="toggle w-fit h-fit"
      >
        <Menu className="text-white closable" strokeWidth={3} size={35} />
      </div>
      <SideBar isOpen={isOpen} toggle={sideBarToggle} />
    </header>
  );
}
