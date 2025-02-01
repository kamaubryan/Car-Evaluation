import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t border-gray-100">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none" />

      <div className="relative container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
                Wrecked Car Market Place
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
            </div>
            <p className="text-gray-600 leading-relaxed">
              Your premium destination for authenticated wrecked cars and
              genuine auto parts. We ensure secure transactions in a trusted
              environment.
            </p>
            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span className="text-sm text-gray-600">Verified Sellers</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span className="text-sm text-gray-600">Secure Payments</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                Quick Links
              </h4>
              <div className="h-0.5 w-12 bg-blue-600 rounded-full" />
            </div>
            <ul className="space-y-3 columns-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Featured Cars
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Spare Parts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Seller Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors inline-flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Safety Tips
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                Connect With Us
              </h4>
              <div className="h-0.5 w-12 bg-blue-600 rounded-full" />
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                Follow us on social media for updates and exclusive deals
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-50 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-50 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-50 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.016 18.6h-2.472v-3.9c0-.936-.018-2.142-1.302-2.142-1.302 0-1.5 1.02-1.5 2.07v3.972H9.27V9.75h2.37v1.092h.036c.33-.636 1.14-1.308 2.352-1.308 2.52 0 2.988 1.662 2.988 3.828v4.248zM7.116 8.658c-.792 0-1.44-.648-1.44-1.44s.648-1.44 1.44-1.44 1.44.648 1.44 1.44-.648 1.44-1.44 1.44zm1.236 9.942H5.88V9.75h2.472v8.85zM19.5 3h-15c-.828 0-1.5.672-1.5 1.5v15c0 .828.672 1.5 1.5 1.5h15c.828 0 1.5-.672 1.5-1.5v-15c0-.828-.672-1.5-1.5-1.5z" />
                  </svg>
                </a>
              </div>
              <div className="pt-4">
                <p className="text-gray-600 mb-2">Have questions? Contact us</p>
                <a
                  href="mailto:support@wreckedcarmarket.com"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  support@wreckedcarmarket.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © {currentYear} Wrecked Car Market Place. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                Terms
              </a>
              <span className="h-1 w-1 bg-gray-300 rounded-full"></span>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                Privacy
              </a>
              <span className="h-1 w-1 bg-gray-300 rounded-full"></span>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
