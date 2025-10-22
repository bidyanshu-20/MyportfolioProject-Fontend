import React, { useState, useContext, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCrossCircled } from "react-icons/rx";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setmenu] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const navitems = [
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "About", path: "/about" },
    { id: 3, text: "Portfolio", path: "/portfolio" },
    { id: 4, text: "Experience", path: "/experience" },
    { id: 5, text: "Contact us", path: "/contact" },
  ];

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (menu) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [menu]);

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="flex justify-between items-center h-16">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="photo.avif"
            alt="My Profile"
            className="h-10 w-10 rounded-full object-cover"
          />
          <Link to="/" className="flex flex-col leading-tight">
            <h1 className="font-semibold text-base text-black dark:text-white">
              <span className="text-xl font-bold text-green-400 drop-shadow-lg">
                B
              </span>
              idyanshu
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-300">
              Web Developer
            </p>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-6 cursor-pointer">
            {navitems.map(({ id, text, path }) => (
              <li
                key={id}
                className="hover:scale-105 font-semibold transition-transform duration-200"
              >
                <Link
                  to={path}
                  className="text-black dark:text-white hover:text-green-400"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Toggle (Desktop) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hidden md:block px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>

          {/* Hamburger Menu (Mobile) */}
          <div
            onClick={() => setmenu(!menu)}
            className="md:hidden cursor-pointer text-black dark:text-white transition-transform duration-200"
          >
            {menu ? (
              <RxCrossCircled size={26} />
            ) : (
              <GiHamburgerMenu size={26} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 w-full bg-white dark:bg-gray-900 flex flex-col items-center justify-center gap-6 py-8 transition-all duration-300 ease-in-out ${
          menu
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 w-full">
          {navitems.map(({ id, text, path }) => (
            <li key={id} className="hover:scale-105 duration-200 font-semibold">
              <Link
                to={path}
                className="text-black dark:text-white text-lg"
                onClick={() => setmenu(false)}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => {
            setDarkMode(!darkMode);
            setmenu(false);
          }}
          className="mt-4 px-5 py-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
