import { Card } from "antd";

const AboutUs = () => {
  return (
    <div className="relative bg-white py-20 px-4 sm:px-6 lg:px-8">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-grid-slate-100 bg-[size:60px_60px] opacity-20" />

      <div className="container mx-auto max-w-5xl relative z-10 text-center">
        {/* Section Title */}
        <div className="mb-8">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-lg font-semibold tracking-wide uppercase">
            About Us
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          Empowering Your Journey with Trusted Salvage Deals
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We connect buyers and sellers in the wrecked car marketplace with a
          secure, transparent, and seamless experience. Our mission is to
          transform damaged vehicles into new opportunities by offering
          authentic parts and competitive deals.
        </p>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Card className="shadow-lg rounded-2xl border border-gray-200 p-6 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              Verified Sellers
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              We ensure authenticity and trust in every transaction.
            </p>
          </Card>

          <Card className="shadow-lg rounded-2xl border border-gray-200 p-6 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-4">
              Secure Transactions
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Our platform prioritizes safe and reliable payments.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
