import { useState } from "react";
import { Button } from "antd";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 bg-[size:60px_60px] opacity-20" />

      <div className="container mx-auto px-4 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 z-10">
            {/* Pre-header */}
            <div className="inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-xls font-semibold tracking-wide uppercase">
                Wrecked Car Marketplace
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Transform Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Wrecked Car{" "}
              </span>
              Into Opportunity
            </h1>

            {/* Subheading */}
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
              Buy & Sell Wrecked Cars & Premium Parts
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-600 max-w-xl">
              Discover unbeatable deals on salvage vehicles and authentic spare
              parts. Join our trusted marketplace with verified sellers and
              secure transactions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                type="primary"
                size="large"
                className="h-12 text-lg px-8 flex items-center justify-center"
                style={{
                  background: "#2563eb",
                  fontWeight: 500,
                }}
              >
                Explore Cars
              </Button>

              <Button
                size="large"
                className="h-12 text-lg px-8 flex items-center justify-center border-2"
                style={{
                  fontWeight: 500,
                  color: "#374151",
                  borderColor: "#d1d5db",
                }}
              >
                Browse Parts
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex gap-8 pt-8">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
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
                <div>
                  <p className="font-semibold text-gray-900">
                    Verified Sellers
                  </p>
                  <p className="text-sm text-gray-600">100% Trusted</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-600"
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
                <div>
                  <p className="font-semibold text-gray-900">Secure Deals</p>
                  <p className="text-sm text-gray-600">Protected Payment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative hidden lg:block">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
            <div className="relative">
              <img
                src="/api/placeholder/600/400"
                alt="Wrecked Car Marketplace"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
