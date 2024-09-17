import React from "react";
import { assets } from "@/Assests/assets";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-6">
        <Image src={assets.logo} alt="logo" className="w-[130px] sm:w-auto" />
        <button className="flex items-center border border-solid border-black p-4 font-medium shadow-[-7px_7px_0px_#000000] gap-2">
          Get started <Image src={assets.arrow} alt="arrow" className="ml-2" />
        </button>
        {/* Middle header */}
      </div>
      <div className="text-center my-4">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="max-w-[720px] m-auto mt-8 p-2 sm:p-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, nemo.
          Facilis commodi odio nulla facere doloremque neque, fugit quos
          necessitatibus exercitationem minima nam quam.
        </p>
      </div>
      <form className="flex justify-center mt-8 max-w-[500px] m-auto ">
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-solid border-black px-4 py-4 sm:px-10"
        />
        <button className="border border-solid border-black px-4 py-4 sm:px-10 active:bg-white active:bg-gray-400 hover:shadow-[7px_7px_0px_#000000]">Subscribe</button>
      </form>
    </div>
  );
};

export default Header;
