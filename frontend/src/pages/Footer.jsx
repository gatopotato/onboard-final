import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {/* Products Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              {['Premium Plan', 'Basic Plan', 'Enterprise Solution', 'Analytics Dashboard', 'Mobile App', 'API Access'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors duration-200 block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              {['For Startups', 'For Enterprise', 'For Small Business', 'Integration Partners', 'Developers'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors duration-200 block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+1234567890" className="hover:text-white transition-colors duration-200 block">
                  +91 85878 06940
                </a>
              </li>
              <li>
                <a href="tel:+1987654321" className="hover:text-white transition-colors duration-200 block">
                  +91 73796 42808
                </a>
              </li>
              <li>
                <a href="mailto:contact@onboard.com" className="hover:text-white transition-colors duration-200 block">
                  contact@onboard.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Full Width */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-white font-bold text-xl">Onboard</span>
              <span className="text-gray-400 ml-1">©</span>
              <span className="text-gray-400 ml-1">{new Date().getFullYear()}</span>
            </div>

            {/* Social Links - Commented Out */}
            {/* 
            <div className="flex space-x-6">
              {['twitter', 'linkedin', 'youtube', 'spotify', 'apple'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={platform}
                >
                  <span className="sr-only">{platform}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
              ))}
            </div>
            */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;