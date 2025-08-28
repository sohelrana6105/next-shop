// import dbConnect from "@/lib/dbConnect";
// import ProductHighlightsClient from "./ProductHighlightsClient";

// export default async function ProductHighlights() {
//   const collection = await dbConnect("products");
//   const products = await collection.find().toArray();

//   // Convert ObjectId to string
//   const plainProducts = products.map((product) => ({
//     ...product,
//     _id: product._id.toString(),
//   }));

//   return <ProductHighlightsClient products={plainProducts} />;
// }

//---------------

// import dbConnect from "@/lib/dbConnect";
// import ProductHighlightsClient from "./ProductHighlightsClient";

// interface ProductFromDb {
//   _id: { toString: () => string }; // MongoDB ObjectId
//   name?: string;
//   description?: string;
//   price?: number;
//   image?: string;
// }

// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
// }

// export default async function ProductHighlights() {
//   const collection = await dbConnect("products");
//   const productsFromDb: ProductFromDb[] = await collection.find().toArray();

//   const plainProducts: Product[] = productsFromDb.map((product) => ({
//     _id: product._id.toString(),
//     name: product.name ?? "",
//     description: product.description ?? "",
//     price: product.price ?? 0,
//     image: product.image ?? "",
//   }));

//   return <ProductHighlightsClient products={plainProducts} />;
// }

// -----------------

import dbConnect from "@/lib/dbConnect";
import ProductHighlightsClient from "./ProductHighlightsClient";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export default async function ProductHighlights() {
  const collection = await dbConnect("products");
  const productsData = await collection.find().toArray();

  // Map to typed Product with fallbacks
  const products: Product[] = productsData.map((p) => ({
    _id: p._id?.toString() ?? "",
    name: p.name ?? "Unnamed Product",
    description: p.description ?? "",
    price: p.price ?? 0,
    image: p.image ?? "/assests/products/default_image.png",
  }));

  return <ProductHighlightsClient products={products} />;
}
