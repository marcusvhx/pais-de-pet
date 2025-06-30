"use client";
import logo from "@/public/icons/logo.svg";
import Image from "next/image";
import { Menu } from "lucide-react";
import SideBar from "./SideBar";
import { useState } from "react";
import toggleWrapper from "@/functions/ToggleWrapper";

export interface iBookmark {
  name: string;
  anchor: string;
}

export default function Header({}: {}) {
  const linksList: iBookmark[] = [
    // { name: "produtos", anchor: "store" },
    { name: "sobre nós", anchor: "about-us" },
    { name: "serviços", anchor: "services" },
    { name: "funcionários", anchor: "employees" },
    { name: "feedbacks", anchor: "feedbacks" },
    { name: "contatos", anchor: "contacts" },
    { name: "endereço", anchor: "address" },
    { name: "agendamento", anchor: "schedule" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => toggleWrapper(setIsOpen);

  return (
    <>
      <header className="px-2 py-1 sticky top-0 left-0 z-10 w-full h-16 flex items-center justify-between gap-2 bg-gradient-to-tr from-yellow from-1% to-tanjerina">
        <a href="#home" className="relative h-10 w-25 ">
          <Image alt="logo pais de pet" src={logo} className="h-full w-full" />
        </a>
        {/* sumario mobile */}
        <div onClick={toggle} className="w-fit h-fit md:hidden">
          <Menu className="text-white closable" strokeWidth={3} size={35} />
        </div>

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
      <SideBar isOpen={isOpen} toggle={toggle} bookmarks={linksList} />
    </>
  );
}
