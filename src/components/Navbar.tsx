import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Transparent only on home page
  const isHome = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[70px] z-50 px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between transition-all
        ${isHome ? "bg-transparent text-white" : "bg-white text-gray-800 shadow-md"}
      `}
    >
      {/* Logo */}
      <Link to="/" className="text-xl font-bold">
        BuildCo
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10 font-medium">
        {["/", "/services", "/about", "/contact"].map((path, i) => (
          <li key={path}>
            <Link
              to={path}
              className={`transition hover:text-yellow-400 ${
                location.pathname === path ? "text-yellow-400" : ""
              }`}
            >
              {["Home", "Services", "About", "Contact"][i]}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        aria-label="Toggle Menu"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5"
      >
        <span className={`w-6 h-0.5 ${isHome ? "bg-white" : "bg-gray-800"}`} />
        <span className={`w-6 h-0.5 ${isHome ? "bg-white" : "bg-gray-800"}`} />
        <span className={`w-6 h-0.5 ${isHome ? "bg-white" : "bg-gray-800"}`} />
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-black/90 text-white md:hidden transition-all duration-300
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
        `}
      >
        <ul className="flex flex-col items-center gap-6 py-10 text-lg">
          {["/", "/services", "/about", "/contact"].map((path, i) => (
            <li key={path}>
              <Link to={path} onClick={() => setIsOpen(false)}>
                {["Home", "Services", "About", "Contact"][i]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
