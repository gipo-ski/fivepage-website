import { Link } from "react-router-dom";

import Search from "./Search";

const Navbar = ({search, setSearch}) => {
  return (
    <nav className="mainNav">
      <ul class="flex flex-row gap-8 justify-items-end text-red-200 text-2xl p-2">
        <Search />
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/products/:id">Product</Link>
        </li>
        {/* <li><Link to="/services">Services</Link></li> */}
        {/* <li><Link to="/services/:id">Service</Link></li> */}
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
