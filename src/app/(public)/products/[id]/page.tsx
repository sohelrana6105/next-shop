// import dbConnect from "@/lib/dbConnect";
// import { ObjectId } from "mongodb";
// import Image from "next/image";

// interface Props {
//   params: { id: string };
// }

// export default async function ProductDetails({ params }: Props) {
//   const collection = await dbConnect("products");
//   const product = await collection.findOne({ _id: new ObjectId(params.id) });

//   if (!product) {
//     return (
//       <div className="max-w-6xl mx-auto px-6 py-10">
//         <h1 className="text-2xl font-bold">Product not found</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 border border-gray-200 dark:border-gray-800">
//         {/* Product Image */}
//         <div className="relative w-full h-96 rounded-lg overflow-hidden">
//           <Image
//             src={product.image}
//             alt={product.name}
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* Product Info */}
//         <div className="space-y-6">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
//               {product.name}
//             </h1>
//             <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
//               {product.category}
//             </p>
//           </div>

//           <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//             {product.description}
//           </p>

//           <div className="text-3xl font-semibold text-green-600 dark:text-green-400">
//             ${product.price}
//           </div>

//           <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

//----------------------

// export const dynamic = "force-dynamic";

import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
}

interface Props {
  params: { id: string };
}

export default async function ProductDetails({ params }: Props) {
  const collection = await dbConnect("products");

  if (!params?.id || !ObjectId.isValid(params.id)) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-10 text-2xl font-bold">
        Invalid product ID
      </div>
    );
  }

  const productData = await collection.findOne({
    _id: new ObjectId(params.id),
  });

  if (!productData) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-10 text-2xl font-bold">
        Product not found
      </div>
    );
  }

  const product: Product = {
    _id: productData._id?.toString() ?? "",
    name: productData.name ?? "Unnamed Product",
    description: productData.description ?? "",
    price: productData.price ?? 0,
    image: productData.image ?? "/assests/products/default_image.png",
    category: productData.category ?? undefined,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 border border-gray-200 dark:border-gray-800">
        <div className="relative w-full h-96 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {product.name}
            </h1>
            {product.category && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {product.category}
              </p>
            )}
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {product.description}
          </p>

          <div className="text-3xl font-semibold text-green-600 dark:text-green-400">
            ${product.price}
          </div>

          <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
