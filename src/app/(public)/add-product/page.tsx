// src/app/public/add-product/page.tsx

import AddProductForm from "./AddProductForm";

export default function AddProductPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Add a New Product
        </h1>
        <AddProductForm />
      </div>
    </main>
  );
}
