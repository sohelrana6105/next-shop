// import dbConnect from "@/lib/dbConnect";
// import Image from "next/image";
// import Link from "next/link";

// export default async function ProductsPage() {
//   const collection = await dbConnect("products");
//   const productsInital = await collection.find().toArray();

//   const products = productsInital.map((product) => ({
//     ...product,
//     _id: product._id.toString(),
//   }));

//   // const images = products.map((p) => p.image);

//   // console.log("images", images);

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <h1 className="text-3xl font-bold mb-8">All Products</h1>

//       {products.length === 0 ? (
//         <p>No products found.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.map((product: any) => (
//             <div
//               key={product._id} // MongoDB `_id` is usually used
//               className="border border-gray-100 rounded-xl shadow-md p-5 bg-white dark:bg-gray-800 transition"
//             >
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 width={400}
//                 height={400}
//                 className="w-full h-48 object-cover rounded-lg mb-4"
//                 loading="lazy"
//               />
//               <h2 className="text-xl font-semibold">{product.name}</h2>
//               <p className="text-gray-600 dark:text-gray-300 mb-2">
//                 {product.description}
//               </p>
//               <p className="font-bold text-lg mb-4">${product.price}</p>
//               <Link
//                 href={`/products/${product._id}`}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition inline-block"
//               >
//                 View Details
//               </Link>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

//__________________________________________________

// app/(public)/products/page.tsx
// export const dynamic = "force-dynamic";

import dbConnect from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";

interface Props {
  searchParams?: { page?: string }; // Next.js 15 query param
}
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const PAGE_SIZE = 12; // Number of products per page

export default async function ProductsPage({ searchParams }: Props) {
  const page = parseInt(searchParams?.page || "1", 10);
  const skip = (page - 1) * PAGE_SIZE;

  const collection = await dbConnect("products");

  const totalProducts = await collection.countDocuments();
  const productsInital = await collection
    .find()
    .skip(skip)
    .limit(PAGE_SIZE)
    .toArray();

  const products: Product[] = productsInital.map((product) => ({
    _id: product._id.toString(),
    name: product.name,
    description: product.description,
    price: product.price,
    image: product.image,
  }));

  const totalPages = Math.ceil(totalProducts / PAGE_SIZE);

  // console.dir(productsInital, { depth: null, colors: true });

  return (
    <div className="max-w-7xl mx-auto  py-12">
      <h1 className="text-center text-3xl font-bold mb-16">All Products</h1>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product._id}
                className="border border-gray-100 rounded-xl shadow-md p-5 bg-white dark:bg-gray-800 transition"
              >
                <Image
                  src={product.image || "/assests/products/default_image.png"}
                  alt={product.name || "Product"}
                  width={400}
                  height={400}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {product.description}
                </p>
                <p className="font-bold text-lg mb-4">${product.price}</p>
                <Link
                  href={`/products/${product._id}`}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition inline-block"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={`/products?page=${p}`}
                className={`px-4 py-2 border rounded ${
                  p === page
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {p}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
