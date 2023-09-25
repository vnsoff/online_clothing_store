import Image from 'next/image'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
    <div className="logo flex items-center justify-center">
      <p className="font-semibold m-4">Elegance Emporium</p>
    </div>
    <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/trends">Trends</Link>
          </li>
          <li>
            <Link to="/new">New</Link>
          </li>
          <li>
            <Link to="/plus">PlusSize</Link>
          </li>
          <li>
            <Link to="/brands">Brands</Link>
          </li>
        </ul>
      </nav>
    </header>
    )
}

export default Header 