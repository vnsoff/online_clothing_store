// components/Header.js

import Link from "next/link";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto py-4 flex flex-col items-center">
        <div className="text-2xl font-bold mb-4">
          <Link href="/">Emporium</Link>
        </div>
        <nav className="flex items-center justify-center space-x-4">
          <Link href="/">Home</Link>
          <Link href="/women">Women</Link>
          <Link href="/men">Men</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
