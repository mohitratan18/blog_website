import Image from "next/image";
import Link from "next/link";
import React from "react";
import { assets } from "@/Assests/assets";

const Footer = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-around bg-black p-2 gap-4">
      <Image src={assets.logo_light} alt="" className="w-[200px] h-[50px]"/>
      <p className="text-white">Made with Love by @Mohit</p>
      <div className="flex gap-2">
        <Link className="rounded-full" href="/"><Image src={assets.facebook_icon} alt=""/></Link>
        <Link className="rounded-full" href="/"><Image src={assets.googleplus_icon} alt=""/></Link>
        <Link className="rounded-full" href="/"><Image src={assets.twitter_icon} alt=""/></Link>
      </div>
    </div>
  );
};

export default Footer;