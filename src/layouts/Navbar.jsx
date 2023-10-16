import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <nav className="bg-white flex justify-between h-20 p-2 top-0 sticky items-center shadow-lg">
        <div className="flex justify-between items-center w-full m-auto">
          <Link
            to="/"
            className="text-gray-600 font-bold text-3xl no-underline"
            onClick={handleMenuClose}
          >
            GUIDE ME LEARN
          </Link>
          <div className="hidden md:flex">
            <ul className="flex justify-center items-center">
              <li className="mr-5">
                <Link
                  to="/"
                  className="text-slate-500 font-medium no-underline text-lg hover:text-pink-700"
                  onClick={handleMenuClose}
                >
                  Home
                </Link>
              </li>
              <li className="mr-5">
                <Link
                  to="/exercise"
                  className="text-slate-500 font-medium no-underline text-lg hover:text-pink-700"
                  onClick={handleMenuClose}
                >
                  Exercise
                </Link>
              </li>
              <li className="mr-5">
                <Link
                  to="/reference"
                  className="text-slate-500 font-medium no-underline text-lg hover:text-pink-700"
                  onClick={handleMenuClose}
                >
                  Reference
                </Link>
              </li>
              <li className="mr-5">
                <Link
                  to="/projects"
                  className="text-slate-500 font-medium no-underline text-lg hover:text-pink-700"
                  onClick={handleMenuClose}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div className={`cursor-pointer md:hidden`} onClick={handleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
          <ul className={`md:hidden ${menuOpen ? "block" : "hidden"}`}>
            {" "}
            {/* Display the menu items when menuOpen is true */}
            <li>
              <Link
                to="/"
                className="text-slate-500 font-medium no-underline text-lg hover:text-pink-700"
                onClick={handleMenuClose}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/exercise"
                className="text-slate-500 font-medium no-underline text-lg hover:text-pink-700"
                onClick={handleMenuClose}
              >
                Exercise
              </Link>
            </li>
            <li>
              <Link
                to="/reference"
                className="text-slate-500 font-medium no-underline text-lg hover:text-pink-700"
                onClick={handleMenuClose}
              >
                Reference
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-slate-500 font-medium no-underline text-lg hover:text-pink-700"
                onClick={handleMenuClose}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
