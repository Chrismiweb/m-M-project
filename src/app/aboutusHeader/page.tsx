import Navbar from "../navbar/page"
import NavPage from "../navPages/page";

// import NavPage from "./navPages/page";
import aboutus from '../image/aboutus.png'
import Image from "next/image"
// import './page.css'

export default function aboutUsHeader(){
    return(
        <div className="w-[100%]">
            <div className="relative w-full h-[400px] overflow-hidden">
                <Image src={aboutus} alt="" className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"/>
        
                <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <div className="relative z-10 gap-4 flex flex-col items-center justify-center h-full text-white">
              <h1 className="md:text-[70px] text-[35px] text-center text-[#cce6ff] mt-[40px] font-semibold"> Discover Insight</h1>
              <p className="md:w-[70%] w-[90%] font-serif text-center text-white  text-[18px]">Who we are and what we do extends far beyond offering technology solutions. Discover how we’re impacting the world around us and making a significant difference.</p>
              <button className="bg-blue-600 font-mono transition-all ease-in-out duration-500 text-white font-semibold hover:bg-blue-700  py-[15px] px-[30px]">Contact Us</button>

          </div>
        </div>
      </div>

    )
}