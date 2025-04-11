import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0F0B2A] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <rect width="24" height="24" rx="6" fill="#7C3AED" />
                <path
                  d="M7 12H17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M12 7L12 17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-white font-semibold text-xl">Product</span>
            </div>

            <div className="mb-6">
              <h3 className="text-white font-medium mb-3">
                Subscribe to our newsletter
              </h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#1E1A3A] text-white border border-white/10 rounded-l-md px-4 py-2 w-full focus:outline-none focus:border-purple-500"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-md font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/features"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/security"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/customers"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Customers
                </Link>
              </li>
              <li>
                <Link
                  to="/integrations"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/community"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/docs"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  to="/guides"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  to="/webinars"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Webinars
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Product, Inc. All rights reserved.
          </div>

          <div className="flex space-x-6">
            <Link
              to="/terms"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/privacy"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Privacy
            </Link>
            <Link
              to="/cookies"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Cookies
            </Link>
            <Link
              to="/licenses"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Licenses
            </Link>
            <Link
              to="/settings"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Settings
            </Link>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
