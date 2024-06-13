import Navbar from "../navbar/page"
import NavPage from "../navPages/page";

// import NavPage from "./navPages/page";
import aboutus from '../image/aboutus.png'
import Image from "next/image"
import './page.css'

export default function aboutUsPage(){
    return(
        <div className="w-[100%]">
            <Navbar/>
            <NavPage/>
            
            <div className="aboutus-header gap-4">
                    <h1 className="text-[70px] text-[white] mt-[40px] font-semibold">Discover Insight</h1>
                    <p className="w-[70%] text-center text-white text-[18px]">Who we are and what we do extends far beyond offering technology solutions. Discover how we’re impacting the world around us and making a significant difference.</p>
                    <button className="bg-blue-500 transition-all ease-in-out duration-500 text-white font-semibold hover:bg-blue-600  py-[15px] px-[30px]">Contact Us</button>
            </div>
        </div>

    )
}