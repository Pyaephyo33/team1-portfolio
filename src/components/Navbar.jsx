import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Handle menu toggle
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Handle sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Team", path: "team" },
    { link: "Contact Us", path: "footer" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : "bg-white md:bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-10 inline-block items-center"
            />
            <span className="text-[#263238]">ONE AND ONLY</span>
          </a>

          {/* Navigation items for larger screens */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base text-gray900 hover:text-brandPrimary cursor-pointer first:font-medium"
                >
                {link}
              </Link>
            ))}
          </ul>

          {/* Button for larger screens 
          <div className="space-x-12 hidden lg:flex items-center">
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">
              Get Code
            </button>
          </div>*/}

          {/* Menu button for mobile view */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation items for mobile view */}
        {isMenuOpen && (
          <div className="space-y-4 px-4 mt-16 py-7 bg-brandPrimary fixed top-0 right-0 left-0">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                onClick={() => setIsMenuOpen(false)}
                className="block text-base text-white hover:text-black cursor-pointer first:font-medium"
              >
                {link}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
