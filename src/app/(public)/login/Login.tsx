// "use client";

// import { useSession, signIn, signOut } from "next-auth/react";
// import Image from "next/image";

// export default function Login() {
//   const { data: session } = useSession();

//   if (session) {
//     return (
//       <div className="p-6">
//         <p>
//           Welcome {session?.user?.name} ({session?.user?.email})
//         </p>
//         {session?.user?.image && (
//           <Image
//             src={session.user.image}
//             alt="profile"
//             width={50}
//             height={50}
//           />
//         )}
//         <button
//           onClick={() => signOut()}
//           className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
//         >
//           Sign out
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6">
//       <p>You are not signed in</p>
//       <button
//         onClick={() => signIn("google")}
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//       >
//         Sign in with Google
//       </button>
//     </div>
//   );
// }

//--------------
"use client";

import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Login() {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future: integrate your backend login API here
    console.log("Email:", email, "Password:", password);
  };

  // Logged-in view
  if (session) {
    return (
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
        {session.user?.image && (
          <Image
            src={session.user.image}
            alt="profile"
            width={80}
            height={80}
            className="rounded-full mb-4"
          />
        )}
        <h2 className="text-xl font-semibold mb-2">
          Welcome, {session.user?.name}
        </h2>
        <p className="text-gray-500 mb-4">{session.user?.email}</p>
        <button
          onClick={() => signOut()}
          className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition"
        >
          Sign out
        </button>
      </div>
    );
  }

  // Login form view
  return (
    <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Sign in</h2>

      {/* Email/password form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="your@email.com"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
        >
          Login
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center justify-center mb-4">
        <span className="border-b w-1/4 border-gray-300"></span>
        <span className="mx-2 text-gray-400 text-sm">or</span>
        <span className="border-b w-1/4 border-gray-300"></span>
      </div>

      {/* NextAuth Google login */}
      <button
        onClick={() => signIn("google")}
        className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition"
      >
        Sign in with Google
      </button>
    </div>
  );
}
