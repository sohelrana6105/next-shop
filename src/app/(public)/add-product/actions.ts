// src/app/public/add-product/actions/addProductAction.ts

"use server";

import dbConnect from "@/lib/dbConnect";

export async function addProduct(formData: FormData) {
  //   const result = true;
  const collection = await dbConnect("products");

  //   const finalData = {
  //     name: formData.get("name"),
  //     description: formData.get("description"),
  //     category: formData.get("category"),
  //     price: Number(formData.get("price")),
  //     image: formData.get("image"),
  //     createdAt: new Date(),
  //   };

  // Convert FormData to object
  const data = Object.fromEntries(formData.entries());

  // Optional: Post-processing (e.g. type casting)
  const finalData = {
    ...data,
    price: Number(data.price), // convert to number
    createdAt: new Date(), // add server timestamp
  };

  const result = await collection.insertOne(finalData);

  console.dir(finalData, { depth: null, colors: true });

  return { success: !!result.insertedId };
  //   return { success: !!result };
}
