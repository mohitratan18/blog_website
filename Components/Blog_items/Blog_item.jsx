import Image from "next/image";
import React from "react";
import { blog_data, assets } from "@/Assests/assets";
import Link from "next/link";

const Blog_item = ({image,category,description,id}) => {
  return (
    <Link href={`/blogs/${id}`}>
      <div className="max-w-[330px] sm:max-w-[300px] border border-solid border-black flex flex-col hover:shadow-[-7px_7px_0px_#000000]">
        <Image
          src={image}
          alt=""
          className="w-full"
          width={400}
          height={400}
        />
        <p className="bg-black text-white inline-block text-sm">
          {category}
        </p>
        <div className="p-4">
          <p className="mb-4">{description.substring(0, 200)}...</p>
          <div className="inline-flex items-center gap-2">
            Read More <Image src={assets.arrow} alt="" className="ml-2 w-[20px] h-[12px]"/>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Blog_item;
