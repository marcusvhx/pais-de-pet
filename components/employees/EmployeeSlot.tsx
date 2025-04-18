"use client";
import Image, { StaticImageData } from "next/image";
import EmployeeDetailsModal from "./EmployeeDetails";
import { useState } from "react";
import toggleWrapper from "@/functions/ToggleWrapper";

export interface iEmployeeData {
  picture: StaticImageData;
  name: string;
  profession: string;
  description: string;
  bgColor: string;
}

export default function EmployeeSlot({
  bgColor,
  description,
  picture,
  name,
  profession,
}: iEmployeeData) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => toggleWrapper(setIsOpen);

  return (
    <>
      <div onClick={toggle} className=" flex flex-col items-center z-1">
        <div className="h-50 w-31 3xs:h-66 3xs:w-40 md:h-72 md:w-44 2md:h-90 2md:w-55 relative  ">
          <Image
            src={picture}
            alt={name}
            fill
            className="object-contain object-top rounded-b-md"
          />
        </div>
        <div className="w-fit h-fit sm: p-1 rounded-3xl sm:text-lg/5 capitalize text-center">
          <h2 className="font-bold">{name}</h2>
          <p className="">{profession}</p>
        </div>
      </div>
      <EmployeeDetailsModal
        name={name}
        description={description}
        picture={picture}
        profession={profession}
        bgColor={bgColor}
        isOpen={isOpen}
        toggle={toggle}
      />
    </>
  );
}
