"use client";
import React, { useState } from "react";
import { blog_data } from "@/Assests/assets";
import Blog_item from "./Blog_item";
const Blog_list = () => {
  const [menu, setmenu] = useState("All");
  return (
    <div>
      <div className="flex  gap-6 justify-center mt-10">
        <button
          onClick={() => {
            setmenu("All");
          }}
          className={
            menu === "All" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          All
        </button>
        <button
          onClick={() => {
            setmenu("Technology");
          }}
          className={
            menu === "Technology"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Technology
        </button>
        <button
          onClick={() => {
            setmenu("Startup");
          }}
          className={
            menu === "Startup" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          Startup
        </button>
        <button
          onClick={() => {
            setmenu("Lifestyle");
          }}
          className={
            menu === "Lifestyle"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Lifestyle
        </button>
      </div>
      <div className="flex flex-col sm:flex-row px-4 py-4 items-center sm:px-12 sm:py-12 gap-8 flex-wrap sm:justify-center">
        {blog_data
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => {
            return <Blog_item key={index} {...item} />;
          })}
      </div>
    </div>
  );
};

export default Blog_list;
