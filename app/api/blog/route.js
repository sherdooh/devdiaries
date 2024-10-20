import ConnectDB from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";
import { writeFile} from "fs/promises";

const fs = require('fs');


const LoadDB = async () => {
  await ConnectDB();
};
LoadDB();

export async function GET(request) {
  const blogId = request.nextUrl.searchParams.get("id");

  try {
    if (blogId) {
      const blog = await BlogModel.findById(blogId);
      return NextResponse.json(blog);
    } else {
      const blogs = await BlogModel.find({});
      return NextResponse.json({ blogs });
    }
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    let imgUrl;
    const imageFile = formData.get('image');
    const imageUrl = formData.get('imageUrl');

    if (imageFile) {
      const timestamp = Date.now();
      const imageByteData = await imageFile.arrayBuffer();
      const buffer = Buffer.from(imageByteData);
      const path = `./public/${timestamp}_${imageFile.name}`;
      await writeFile(path, buffer);
      imgUrl = `/${timestamp}_${imageFile.name}`;
    } else if (imageUrl) {
      imgUrl = imageUrl;
    } else {
      throw new Error("No image provided");
    }

    const blogData = {
      title: formData.get('title'),
      description: formData.get('description'),
      category: formData.get('category'),
      author: formData.get('author'),
      image: imgUrl,
      authImg: formData.get('authorImg')
    };

    await BlogModel.create(blogData);
    console.log("Blog saved");
    return NextResponse.json({ success: true, msg: "Blog Added" });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}

// Delete endpoint
export async function DELETE(request) {
  
  const id = await request.nextUrl.searchParams.get('id');
  const blog = await BlogModel.findById(id);
  fs.unlink(`./public${blog.image}`,() => {});

  await BlogModel.findByIdAndDelete(id);

  return NextResponse.json({msg:"Blog Deleted"})

}

export async function PUT(request) {
  
}
