"use client";

import Navbar from "./navbar/page";
import Hero from "./hero/page";
import Bloghome from "./bloghome/page";
import Footer from "./footer/page";
import Bloghome2 from "./bloghome2/page";
import Company from "./companies/page";
import NavPage from "./navPages/page";
import Satisfaction from "./satisfaction/page";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="bg-black">
      <Navbar />
      <NavPage />
      <Hero />

      <div data-aos="fade-up">
        <Company />
      </div>
      <div data-aos="fade-down">

      <Bloghome />
      </div>
      <div data-aos="fade-up">
        <Satisfaction/>

      <Bloghome2 />
      </div>

      <Footer />
    </div>
  );
}
