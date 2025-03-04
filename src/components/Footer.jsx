import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);
  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Team", path: "team" },
  ];

  return (
    <>
      {/* SVG Wave Background */}
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#4caf4f"
            fillOpacity="1"
            d="M0,192L40,165.3C80,139,160,85,240,96C320,107,400,181,480,213.3C560,245,640,235,720,202.7C800,171,880,117,960,106.7C1040,96,1120,128,1200,117.3C1280,107,1360,53,1400,26.7L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </svg>
      </div>

      {/* Footer Section */}
      <footer
        id="footer"
        className="bg-brandPrimary text-gray-200"
      >
        <div className="px-6 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20 text-center">
          {/* Navigation Links */}
          <div className="mb-8">
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {navItems.map(({ link, path }) => (
                <Link
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={path}
                  className="text-sm sm:text-base lg:text-lg font-medium cursor-pointer text-black hover:text-gray-300 transition"
                >
                  {link}
                </Link>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div className="mb-8">
            <div className="flex text-black justify-center gap-6 text-2xl sm:text-3xl">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-all"
                 data-aos="zoom-in-up"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-all"
                 data-aos="zoom-in-up"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-all"
                 data-aos="zoom-in-up"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-all"
                 data-aos="zoom-in-up"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-xs sm:text-sm">
            © 2025 Group One. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
