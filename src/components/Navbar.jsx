import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo_light.png";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Property", path: "/property" },
    { name: "AI Agent", path: "/ai" },
    { name: "Blog", path: "/blog" },
    // { name: "About Us", path: "/about" },
    { name: "Team", path: "/team" },
    // { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : "bg-white md:bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img src={logo} alt="Logo" className="w-10 inline-block" />
            <span className="text-[#263238]">ONE AND ONLY</span>
          </Link>

          {/* Desktop menu */}
          <ul className="md:flex space-x-8 hidden">
            {navItems.map(({ name, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`block text-base hover:text-brandPrimary ${
                    location.pathname === path
                      ? "text-brandPrimary font-medium"
                      : "text-gray-900"
                  }`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="space-y-4 px-4 mt-16 py-7 bg-brandPrimary fixed top-0 right-0 left-0 z-40">
            {navItems.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className="block text-base text-white hover:text-black"
              >
                {name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
