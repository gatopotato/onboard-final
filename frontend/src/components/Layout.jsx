import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

function Layout({ children }) {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Add Listing", path: "/add-listing" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A1628] to-gray-900">
      <nav className="border-b border-white/10 backdrop-blur-sm bg-[#0A1628]/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/"
                className="flex-shrink-0 flex items-center text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
              >
                ONBOARD
              </Link>
            </motion.div>

            {isLoggedIn && (
              <motion.div 
                className="hidden md:flex items-center space-x-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {navLinks.map((link, index) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative group px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 group-hover:w-full transition-all duration-300"
                      initial={false}
                      animate={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                    />
                  </Link>
                ))}
                <button
                  onClick={handleLogout}
                  className="ml-4 px-4 py-2 rounded-md text-sm font-medium bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
                >
                  Logout
                </button>
              </motion.div>
            )}

            {isLoggedIn && (
              <div className="md:hidden">
                <button
                  className="text-white focus:outline-none"
                  aria-label="Open navigation menu"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <motion.main 
        className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {children}
      </motion.main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0A1628]/50 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Onboard. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;