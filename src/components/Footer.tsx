"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

export default function Footer() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number | null) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const sections = [
    {
      title: "Shop",
      links: [
        { name: "All Products", href: "/products" },
        { name: "New Arrivals", href: "/products?filter=new" },
        { name: "Best Sellers", href: "/products?filter=best" },
        { name: "Discounts", href: "/products?filter=discounts" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
        { name: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Shipping Info", href: "/shipping" },
        { name: "Returns & Refunds", href: "/returns" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              NextShop
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Your one-stop shop for quality and trendy products.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5">
              <Link
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-600 hover:text-white transition"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 hover:text-white transition"
              >
                <FaXTwitter />
              </Link>
              <Link
                href="https://www.youtube.com/yourchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-red-600 hover:text-white transition"
              >
                <FaYoutube />
              </Link>
              <Link
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-pink-600 hover:text-white transition"
              >
                <FaInstagram />
              </Link>
            </div>
          </motion.div>

          {/* Footer Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h4
                onClick={() => toggleDropdown(index)}
                className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer flex justify-between items-center sm:cursor-default"
              >
                {section.title}
                <span className="sm:hidden">
                  {openDropdown === index ? "−" : "+"}
                </span>
              </h4>

              <ul
                className={`mt-3 space-y-2 sm:block ${
                  openDropdown === index ? "block" : "hidden sm:block"
                }`}
              >
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} NextShop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
