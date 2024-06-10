import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function footer(){
    return(
        <footer className="w-[100%] bg-[#001a33] font-mono md:items-start py-[70px] md:px-[50px] gap-[30px] justify-center items-center flex flex-col ">
            <div className="w-[80%] justify-center items-center md:justify-start md:items-start flex md:w-[100%]">
                <h1 className="text-[#cce6ff] text-center text-[20px] font-bold">M & M LOGO</h1>
            </div>
            <div className="w-[100%] gap-[30px] md:flex-row justify-center flex flex-col items-center">
                <div className=" font-semibold md:flex-row md:justify-start md:items-start text-[16px] justify-center gap-3 items-center flex flex-col text-center w-[100%]">
                    <div className="flex flex-col text-white w-[90%] gap-3 justify-center items-center md:justify-start md:items-start">
                        <p className="md:hover:underline cursor-pointer">Contact Us</p>
                        <p className="md:hover:underline cursor-pointer">Web Terms of Use</p>
                        <p className="md:hover:underline cursor-pointer">Web Policy</p>
                        <p className="md:hover:underline cursor-pointer">Web Cookie Policy</p>
                    </div>
                    <div className="flex text-white flex-col w-[90%] gap-3 justify-center items-center md:justify-start md:items-start">
                        <p className="md:hover:underline cursor-pointer">Contact Us</p>
                        <p className="md:hover:underline cursor-pointer">Web Terms of Use</p>
                        <p className="md:hover:underline cursor-pointer">Web Policy</p>
                        <p className="md:hover:underline cursor-pointer">Web Cookie Policy</p>
                    </div>
                    <div className=" text-white flex flex-col w-[90%] gap-3 justify-center items-center md:justify-start md:items-start">
                        <p className="md:hover:underline cursor-pointer">Contact Us</p>
                        <p className="md:hover:underline cursor-pointer">Web Terms of Use</p>
                        <p className="md:hover:underline cursor-pointer">Web Policy</p>
                    </div>
                   
                </div>
                <div className="w-[90%] justify-center items-start flex text-center md:justify-start md:items-start">
                    <p className="font-bold text-[#cce6ff]">&quot;We serve as the central hub for marketing campaigns, community engagement, and sales activities.&quot;</p>
                </div>
                
            </div>
            <div className='flex gap-4 text-[white] w-[100%] justify-center items-center md:text-[20px] '>
                    <FaFacebookF className='cursor-pointer'/>
                    <FaLinkedin className='cursor-pointer'/>
                    <FaTwitter className='cursor-pointer'/>
                    <FaYoutube className='cursor-pointer'/>
                    <FaInstagramSquare className='cursor-pointer'/>
            </div>
        </footer>
    )
}