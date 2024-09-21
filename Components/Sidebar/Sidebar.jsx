"use client";
import React, { useEffect, useState } from "react";
import Smallsidebar from "../smallSidebar/Smallsidebar";
import Largesidebar from "../LargeSidebar/LargeSidebar";
import logo, { assets } from "@/Assests/assets";
import Image from "next/image";
const Sidebar = () => {
  const [width, setwidth] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 620) {
      setwidth(true);
    } else {
      setwidth(false);
    }
  }, []);

  return (
    <>
      {width ? (
        <div className="w-full flex justify-between p-4 items-center bg-gray-200">
          <Image src={assets.logo} alt="" />
          <Largesidebar />
        </div>
      ) : (
        <div className="w-full flex justify-between p-4 items-center">
          <Image src={assets.logo} alt="" className="w-[186px] sm:h-[53px]" />
          <div className="mr-4">
            <Smallsidebar />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
