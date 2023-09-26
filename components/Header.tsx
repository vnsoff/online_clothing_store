import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Your Logo</Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/women">Women</Link>
            </li>
            <li>
              <Link to="/men">Men</Link>
            </li>
            {/* Add more navigation links */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;