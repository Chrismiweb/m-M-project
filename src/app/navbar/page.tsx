"use client";

import Link from "next/link";
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-[100%]">
            <div className="w-[100%] py-4 flex px-4 items-center justify-between bg-[black]">
                <div className="flex items-center gap-1 cursor-pointer" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <IoClose className="text-[#cce6ff] text-[30px]" />
                    ) : (
                        <MdMenu className="text-[#cce6ff] text-[30px]" />
                    )}
                    <p className="text-[20px] font-semibold font-mono text-[#cce6ff] hidden md:flex">
                        {isMenuOpen ? "Close" : "Menu"}
                    </p>
                </div>
                <Link href="/">
                    <h1 className="text-blue-500 text-center cursor-pointer text-[20px] font-bold mx-auto">
                    JONEZY LOGO
                    </h1>
                </Link>
                {/* Add an invisible placeholder to balance the flex container */}
                <div className="flex items-center gap-1 cursor-pointer invisible">
                    <MdMenu className="text-[30px]" />
                    <p className="text-[20px] font-semibold hidden text-red-500 font-mono md:flex">Menu</p>
                </div>
            </div>
            {/* Conditionally render horizontal menu */}
            
            {/* Vertical menu */}
            <div className={`transition-all font-mono duration-1000 ease-in-out ${isMenuOpen ? 'opacity-100 h-[100vh]' : 'opacity-0 h-0'} overflow-hidden bg-black pl-12 text-[20px] md:text-[25px] flex flex-col gap-[10px] font-medium`}>
                {isMenuOpen && (
                    <>
                        <Link href="*"><p className="transition-all duration-500 mt-[20px] hover:text-blue-500 text-[#cce6ff]">Programs</p></Link>
                        <Link href="*"><p className="transition-all duration-500 hover:text-blue-500 text-[#cce6ff]">E-apps</p></Link>
                        <Link href="*"><p className="transition-all duration-500 hover:text-blue-500 text-[#cce6ff]">Community</p></Link>
                        <Link href="*"><p className="transition-all duration-500 hover:text-blue-500 text-[#cce6ff]">Resources</p></Link>
                        <Link href="*"><p className="transition-all duration-500 hover:text-blue-500 text-[#cce6ff]">Learn</p></Link>
                        <Link href="*"><p className="transition-all duration-500 hover:text-blue-500 text-[#cce6ff]">Empower Education</p></Link>
                        <Link href="*"><p className="transition-all duration-500 hover:text-blue-500 text-[#cce6ff]">News & Event</p></Link>
                        <Link href="*"><p className="transition-all duration-500 hover:text-blue-500 text-[#cce6ff]">Get the Software</p></Link>
                        <Link href='/aboutUsPage'><p className="transition-all duration-500 hover:text-blue-500 text-[#cce6ff]">About Us</p></Link>

                    </>
                )}
            </div>
        </nav>
    );
}
