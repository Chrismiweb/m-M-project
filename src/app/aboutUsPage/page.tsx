"use client";

import Navbar from "../navbar/page";
import NavPage from "../navPages/page";
import AboutUsHeader from "../aboutusHeader/page";
import WhoWeAre from "../WhoWeAre/page";
import OurMission from "../ourMission/page";
import Esco from "../escos/page";
import OurMission2 from "../ourMission2/page";
import Achievement from "../achievement/page";
import Footer from "../footer/page";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";

export default function AboutUsPage() {
    useEffect(() => {
        AOS.init({
          duration: 1200,
          once: true,
        });
      }, []);
    return (
        <div className="w-[100%] bg-black">
            <Navbar />
            <NavPage />
            <AboutUsHeader />
            <div data-aos="fade-up">
                <WhoWeAre />
            </div>
            <OurMission />
            <div data-aos="fade-up">
                <Esco />
            </div>
            <div data-aos="fade-up">
                <OurMission2 />
                <Achievement />
            </div>
            <Footer />
        </div>
    );
}
