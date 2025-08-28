// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";

// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
// }
// interface ProductHighlightsProps {
//   products: Product[];
// }

// export default function ProductHighlightsClient({
//   products,
// }: ProductHighlightsProps) {
//   //   console.log(products);

//   return (
//     <section className=" bg-white dark:bg-gray-900 py-16">
//       <div className="max-w-7xl mx-auto  text-center">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="mb-12"
//         >
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
//             Featured Products
//           </h2>
//           <p className="mt-3 text-gray-600 dark:text-gray-300">
//             Discover some of our best-selling and trending products.
//           </p>
//         </motion.div>

//         {/* Product Grid */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {products.slice(0, 6).map((product, index) => (
//             <motion.div
//               key={product._id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
//             >
//               <div className="relative w-full h-56">
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   fill
//                   className="object-contain p-4"
//                 />
//               </div>
//               <div className="p-6 text-left">
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
//                   {product.name}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 mt-2">
//                   {product.description}
//                 </p>
//                 <p className="text-lg font-bold text-blue-600 mt-4">
//                   {product.price}
//                 </p>
//                 <Link
//                   href={`/products/${product._id}`}
//                   className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA for all products */}
//         <div className="mt-12">
//           <Link
//             href="/products"
//             className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition"
//           >
//             View All Products
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

//---------------------

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductHighlightsProps {
  products: Product[];
}

export default function ProductHighlightsClient({
  products,
}: ProductHighlightsProps) {
  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Featured Products
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Discover some of our best-selling products.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 6).map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative w-full h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {product.description}
                </p>
                <p className="text-lg font-bold text-blue-600 mt-4">
                  ${product.price}
                </p>
                <Link
                  href={`/products/${product._id}`}
                  className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/products"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
