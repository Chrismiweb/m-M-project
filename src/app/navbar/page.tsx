import Link from "next/link"
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export default function navbar(){
    // const[nav, setNav] = useState(false)
    // function showNav(){
    //     setNav(!nav)
    // }
    return(
        <nav className="w-[100%] justify-between items-center">
            <div className="w-[100%] py-4 flex px-4 items-center gap-[500px] bg-white">
               <Link href="/navbar2">
                    <div className="flex justify-center items-center gap-1 cursor-pointer">
                        <MdMenu className="text-blue-500 text-[30px]"/>
                        <p className="text-[20px] font-semibold text-blue-500">Menu</p>
                    </div>
                </Link>
                <h1 className="text-blue-500 text-center text-[20px] font-bold">M & M LOGO</h1>
            </div>
            <div className="w-[100%] py-8 px-2 justify-around font-medium bg-white flex flex-row items-center "> 
                <Link href="*"><p className="hover:text-blue-500">Programs</p></Link>
                <Link href="*"><p className="hover:text-blue-500">E-apps</p></Link>
                <Link href="*"><p className="hover:text-blue-500">Community</p></Link>
                <Link href="*"><p className="hover:text-blue-500">Resources</p></Link>
                <Link href="*"><p className="hover:text-blue-500">Learn</p></Link>
                <Link href="*"><p className="hover:text-blue-500">Empower Education</p></Link>
                <Link href="*"><p className="hover:text-blue-500">News & Event</p></Link>
                <Link href="*"><p className="hover:text-blue-500">Get the Software</p></Link>
            {/* <Link href="*"><p className="hover:text-blue-500">About Us</p></Link>
                <Link href="*"><p className="hover:text-blue-500">Contact Us</p></Link>
                <Link href="*"><p className="hover:text-blue-500">Collaborate</p></Link>
                <Link href="*"><p className="hover:text-blue-500">Log In</p></Link>
                <Link href="*"><p className="hover:text-blue-500">Sign Up</p></Link> */}
            </div>
           
        </nav>
    )
}