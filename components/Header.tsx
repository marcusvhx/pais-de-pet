import logo from "@/public/png/logo-pais-de-pet.png";
import Image from "next/image";
import Search from "./utils/Search";
import { Menu } from "lucide-react";
export default function Header({}: {}) {
  return (
    <header className="p-2 w-full h-16 flex items-center justify-around bg-gradient-to-b from-yellow to-tanjerina">
      <Image alt="logo pais de pet" src={logo} className="w-20" />
      <Search />
      <Menu className="text-white" strokeWidth={3} size={35} />
    </header>
  );
}
