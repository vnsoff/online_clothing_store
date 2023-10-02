import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, User, Heart } from 'feather-icons';
import 'tailwindcss/tailwind.css';

function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto py-4 flex flex-col items-center">
        <div className="text-2xl font-bold mb-4">
          <Link href="/">Emporium</Link>
        </div>
        <nav className="flex items-center justify-center">
          <div className="flex space-x-20 items-center">
            <Link href="/">Home</Link>
            <Link href="/trends">Trends</Link>
            <Link href="/new">New</Link>
            <Link href="/women">Women</Link>
            <Link href="/men">Men</Link>
            <Link href="/plus_size">Plus Size</Link>
            <Link href="/brands">Brands</Link>
            <div className="relative text-gray-600">
              <input
                type="search"
                name="search"
                placeholder="Search products"
                className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
              />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4 flex items-center">
              {/* Custom Search Icon */}
              <Image
                src="/images/search-icon.png"
                alt="Search"
                width={24}
                height={24}
                className="w-6 h-6 ml-auto"
              />
            </button>
            </div>
            {/* Cart Button */}
            <Link href="/cart" legacyBehavior>
              <a className="text-gray-600">
                <Image
                  src="/images/cart-icon.png"
                  alt="Cart"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
            </Link>
            {/* Login/Profile Button */}
            <Link href="/profile" legacyBehavior>
              <a className="text-gray-600">
                <Image
                  src="/images/profile-icon.png"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
            </Link>
            {/* Favorites Button */}
            <Link href="/favorites" legacyBehavior>
              <a className="text-gray-600">
                <Image
                  src="/images/favorites-icon.png"
                  alt="Favorites"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
