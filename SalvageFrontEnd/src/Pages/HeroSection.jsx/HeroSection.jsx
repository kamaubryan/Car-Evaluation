
import { Button } from "antd";
import HeroImage from "/assets/heroCar.jpeg"

function HeroSection() {
  return (
    <>
      <div className="relative bg-gradient-to-r from-gray-800 to-black py-16 font-[sans-serif] h-[70vh] flex items-center ">
        <div className="absolute inset-0">
          <img
            src={HeroImage}
            alt="Background Image"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Welcome to Our Premium Service
          </h1>
          <p className="text-lg md:text-xl mb-12">
            Experience excellence like never before with our exclusive products
            and services.
          </p>
       <Button type="primary" size="large">
        Get Started
       </Button>
        </div>
      </div>
    </>
  );
}

export default HeroSection