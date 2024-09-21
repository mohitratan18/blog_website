import connect from "@/lib/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import Blog from "@/lib/models/Blog";

const ConnectDb = async () => {
  await connect();
};
ConnectDb();

export async function GET(request) {
  console.log("API REQUEST DONE");
  return NextResponse.json({ msg: "API WORKING" });
}

export async function POST(request) {
  const fromData = await request.formData();
  const timestamp = Date.now();

  const image = fromData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);

  const path = `./Assests/${timestamp}_${image.name}`;

  await writeFile(path, buffer);
  const Imgurl = `./${timestamp}_${image.name}`;

  const title = fromData.get("title");
  const description = fromData.get("description");
  const category = fromData.get("category");
  const author = fromData.get("author");
  const date = fromData.get("date");
  const authorImg = fromData.get("authorImg");

  const imageByteDataa = await authorImg.arrayBuffer();
  const bufferr = Buffer.from(imageByteData);

  const pathh = `./Assests/${timestamp}_${authorImg.name}`;

  await writeFile(path, buffer);
  const authUrl = `./${timestamp}_${authorImg.name}`;
  try {
    const blog = await Blog.create({
      title,
      description,
      category,
      author,
      date,
      image: Imgurl,
      authorImg: authUrl,
    });
    return NextResponse.json({msg:"Blog added sucessfully"})
    
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg:"please make sure to enter every details" });
  }
}
