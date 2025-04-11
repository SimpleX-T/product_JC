import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto relative overflow-hidden p-4 md:px-20 md:py-12">
        <div className="absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 w-96 h-96 bg-[#7214FF30] rounded-full blur-[500px]" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-20 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-10">
              <Link to="/" className="flex items-center">
                <img src="/logo.svg" alt="logo" />
              </Link>
            </div>

            <div className="mb-6 bg-[#0E1330] border border-[#282D45] rounded-md p-6">
              <h3 className="text-[#F6F6F7] font-['Satoshi_bold'] text-2xl mb-5">
                Subscribe to our newsletter
              </h3>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#0E1330] text-[#F6F6F7] placeholder:text-[#282D45] border border-[#282D45] rounded-full px-4 py-3 w-full focus:outline-none focus:border-[#7214FF]"
                />
                <button className="bg-[#7214FF] hover:bg-purple-700 text-white px-4 py-2 rounded-full w-full font-medium transition-colors mt-4">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-['Satoshi_bold'] mb-8">Product</h3>
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
            <h3 className="text-white font-['Satoshi_bold'] mb-8">Company</h3>
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
            <h3 className="text-white font-['Satoshi_bold'] mb-8">Resources</h3>
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

          <div className="hidden md:flex space-x-6">
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
            <Link
              to="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              <FaFacebook size={20} />
            </Link>
            <Link
              to="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              <FaXTwitter size={20} />
            </Link>
            <Link
              to="#"
              className="text-white/60 hover:text-white transition-colors"
            >
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
