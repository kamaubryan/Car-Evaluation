import { useEffect } from "react";
import HeroSection from "../HeroSection.jsx/HeroSection";
import Features from "../Features/Features";
import ContactUs from "../ContactsPage/Contact";
import AboutUs from "../AboutUs/AboutUs";

function LandingPage() {
  return (
    <>
      <HeroSection />
      <Features />
      <AboutUs />
      <ContactUs />
    </>
  );
}

export default LandingPage;
