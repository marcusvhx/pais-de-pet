"use client";
import logo from "@/public/png/logo-pais-de-pet.png";
import Image from "next/image";
import Search from "./utils/Search";
import { Menu } from "lucide-react";
import SideBar from "./SideBar";
import { useState } from "react";

export interface iBookmark {
  name: string;
  anchor: string;
}

export default function Header({}: {}) {
  const linksList: iBookmark[] = [
    { name: "produtos", anchor: "store" },
    { name: "serviços", anchor: "services" },
    { name: "funcionários", anchor: "employees" },
    { name: "sobre nós", anchor: "about-us" },
    { name: "agendamento", anchor: "schedule" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const sideBarToggle = (filter: string, classname: string) => {
    if (classname.includes(filter)) {
      setIsOpen((old) => !old);
      const body = document.body.style;
      body.overflow = body.overflow == "" ? "hidden" : "";
    }
  };

  return (
    <header className="px-2 py-2 sticky top-0 left-0 z-10 w-full h-16 flex items-center justify-between gap-2 bg-gradient-to-tl from-yellow to-tanjerina">
      <a href="#home" className="relative h-10 w-25 ">
        <Image alt="logo pais de pet" src={logo} fill className="object-contain" />
      </a>
      {/* <Search /> */}
      {/* sumario mobile */}
      <div
        onClick={(e) => sideBarToggle("side-bar-toggle", e.currentTarget.className)}
        className="side-bar-toggle w-fit h-fit md:hidden"
      >
        <Menu className="text-white closable" strokeWidth={3} size={35} />
      </div>
      <SideBar isOpen={isOpen} toggle={sideBarToggle} bookmarks={linksList} />

      {/* sumario tablet e desktop */}
      <div className="hidden gap-2 px-2 items-center md:flex 2md:gap-4 lg:gap-6">
        {linksList.map((bookmark, idx) => (
          <a
            key={`bookmark${idx}`}
            href={`#${bookmark.anchor}`}
            className="text-white capitalize hover:text-carot h-min whitespace-nowrap md:text-lg 2md:text-xl"
          >
            {bookmark.name}
          </a>
        ))}
      </div>
    </header>
  );
}
