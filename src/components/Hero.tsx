"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto  flex flex-col-reverse lg:flex-row items-center ">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            Shop Smarter, Sell Faster
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6">
            NextShop provides a seamless shopping and management experience.
            Discover trending products, manage your inventory efficiently, and
            grow your business effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link
              href="/products"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition"
            >
              Browse Products
            </Link>
            <Link
              href="/login"
              className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg text-lg font-medium hover:bg-blue-600 hover:text-white transition"
            >
              Login
            </Link>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center lg:justify-end"
        >
          <div className="relative w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-2xl">
            <Image
              src="/assests/hero_section-of-next.png"
              alt="NextShop Hero Illustration"
              fill
              className="object-contain w-full"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Optional Decorative Shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-100 dark:bg-blue-900 rounded-full opacity-30 -z-10"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-100 dark:bg-purple-900 rounded-full opacity-30 -z-10"></div>
    </section>
  );
}
