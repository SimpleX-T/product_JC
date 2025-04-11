import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-6 px-4 md:px-8 fixed backdrop-blur-md top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="Product Logo" className="h-8 mr-2" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-white/80 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white/80 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            to="/features"
            className="text-white/80 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="text-white/80 hover:text-white transition-colors"
          >
            Pricing
          </Link>
          <Link
            to="/blog"
            className="text-white/80 hover:text-white transition-colors"
          >
            Blog
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            to="/signup"
            className="bg-[#7214FF] hover:bg-[#7214FF90] text-white px-[25px] py-[15px] rounded-full font-medium transition-colors"
          >
            Get a Demo
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm absolute top-16 left-0 w-full p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-purple-400 transition-colors"
            >
              About
            </Link>
            <Link
              to="/features"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className="text-white hover:text-purple-400 transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/signup"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-medium transition-colors text-center"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
