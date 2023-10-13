//components/Header.js

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { ShoppingCartIcon, HeartIcon, UserIcon } from './IconComponents';
import MobileMenu from './MobileMenu';

import 'tailwindcss/tailwind.css';

function Header() {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const navLinks = [
    { text: 'Home', href: '/' },
    { text: 'Trends', href: '/trends' },
    { text: 'New', href: '/new' },
    { text: 'Women', href: '/women' },
    { text: 'Men', href: '/men' },
    { text: 'Plus Size', href: '/plus_size' },
    { text: 'Brands', href: '/brands' },
  ];

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto py-4 flex flex-col items-center">
        <div className="text-2xl font-bold mb-4">
          <Link href="/">Store Name</Link>
        </div>
        <nav className="flex items-center justify-center">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 space-x-0 sm:space-x-4 items-center">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 space-x-0 sm:space-x-14 items-center mx-16">
              {navLinks.map((link) => (
                <Link key={link.text} href={link.href}>
                  <div onClick={closeMobileMenu}>{link.text}</div>
                </Link>
              ))}
            </div>
            <div className="relative text-gray-600">
              <input
                type="search"
                name="search"
                placeholder="Search products"
                className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-3 mr-4 flex items-center"
              >
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
            <Link href="/cart">
              <div>
                <ShoppingCartIcon />
              </div>
            </Link>
            {/* Login/Profile Button */}
            <Link href="/profile">
              <div>
                <UserIcon />
              </div>
            </Link>
            {/* Favorites Button */}
            <Link href="/favorites">
              <div>
                <HeartIcon />
              </div>
            </Link>
          </div>
          <button
            className="text-white sm:hidden"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>
        </nav>
      </div>
      {showMobileMenu && <MobileMenu closeMobileMenu={closeMobileMenu} />}
    </header>
  );
}

export default Header;