import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-6 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              src="https://www.icbm.training/usermedia/edc.png" 
              alt="ICBM Logo" 
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-gray-300 text-sm">
              Empowering the next generation of digital professionals through
              quality training and job placement.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://icbm.learning" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="https://icbm.learning/about" className="text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="https://icbm.learning/programs" className="text-gray-300 hover:text-white">
                  Programs
                </a>
              </li>
              <li>
                <a href="https://icbm.learning/contact" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300 text-sm mb-2">
              Digital Bridge Institute
            </p>
            <p className="text-gray-300 text-sm mb-2">
              Email: info@icbm.learning
            </p>
            <p className="text-gray-300 text-sm">
              Phone: +234 (0) 123 456 7890
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-gray-400 text-center">
          &copy; {currentYear} SBTS Group & Digital Bridge Institute. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;