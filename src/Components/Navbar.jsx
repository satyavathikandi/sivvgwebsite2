// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import newlogo from "../assets/newlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/" || location.pathname === "/home";

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const bgColor = scrolled
    ? "bg-[#4b4d9c] text-white shadow-lg"
    : "bg-transparent text-white";

  const mobileBg = scrolled
    ? "bg-white text-black shadow-lg"
    : "bg-[#4b4d9c] text-white";

  const isActive = (path) => location.pathname === path;

  const linkClasses = (path) =>
    `transition-colors duration-200 ${
      isActive(path)
        ? "text-yellow-400 font-bold"
        : scrolled
        ? "hover:text-blue-300"
        : "hover:text-blue-200"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${bgColor}`}
      style={{
        overflow: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/home"
          className="flex items-center space-x-2"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={newlogo}
            alt="SIVVG Logo"
            className="h-10 w-10 md:h-12 md:w-12 object-contain"
          />
      <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-white">
  SIVVG
</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium text-lg md:text-xl">
          <Link to="/home" className={linkClasses("/home")}>
            Home
          </Link>
          <Link to="/about" className={linkClasses("/about")}>
            About
          </Link>
          <Link to="/ourassistance" className={linkClasses("/ourassistance")}>
            Our Assistance
          </Link>
          <Link to="/letstalk" className={linkClasses("/letstalk")}>
            Let’s Talk
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden flex flex-col space-y-1 py-3 px-4 text-center ${mobileBg}`}
          style={{
            overflow: "hidden",
          }}
        >
          {[
            { name: "Home", path: "/home" },
            { name: "About", path: "/about" },
            { name: "Our Assistance", path: "/ourassistance" },
            { name: "Let’s Talk", path: "/letstalk" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`${linkClasses(item.path)} block py-2`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
