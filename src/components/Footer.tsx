import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Footer Navigation - Our Services */}
          <div className="flex flex-col text-left mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="/service1" className="hover:text-gray-400">Service 1</a>
              </li>
              <li>
                <a href="/service2" className="hover:text-gray-400">Service 2</a>
              </li>
              <li>
                <a href="/service3" className="hover:text-gray-400">Service 3</a>
              </li>
              <li>
                <a href="/service4" className="hover:text-gray-400">Service 4</a>
              </li>
            </ul>
          </div>

          {/* Footer Navigation - Contact */}
          <div className="flex flex-col text-left mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="/contact" className="hover:text-gray-400">Contact Us</a>
              </li>
              <li>
                <a href="/support" className="hover:text-gray-400">Support</a>
              </li>
              <li>
                <a href="/locations" className="hover:text-gray-400">Locations</a>
              </li>
              <li>
                <a href="/careers" className="hover:text-gray-400">Careers</a>
              </li>
            </ul>
          </div>

          {/* Footer Navigation - Other */}
          <div className="flex flex-col text-left mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Other</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="/about" className="hover:text-gray-400">About Us</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-gray-400">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="hover:text-gray-400">Terms of Service</a>
              </li>
              <li>
                <a href="/sitemap" className="hover:text-gray-400">Sitemap</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6 mb-4">
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-blue-600"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} className="w-8 h-8" />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-blue-400"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} className="w-8 h-8" />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-pink-600"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 items-center">
            <p className="text-sm mb-2">
              &copy; {currentYear} MyWebsite. All rights reserved.
            </p>
            <p className="text-sm">
              Designed with <span className="text-red-500">&hearts;</span> by MyWebsite Team
            </p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
