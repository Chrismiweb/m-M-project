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
                    <p className="text-[20px] font-semibold text-[#cce6ff] hidden md:flex">
                        {isMenuOpen ? "Close" : "Menu"}
                    </p>
                </div>
                <Link href="/">
                    <h1 className="text-[#cce6ff] text-center cursor-pointer text-[20px] font-bold mx-auto">
                        M & M LOGO
                    </h1>
                </Link>
                {/* Add an invisible placeholder to balance the flex container */}
                <div className="flex items-center gap-1 cursor-pointer invisible">
                    <MdMenu className="text-[30px]" />
                    <p className="text-[20px] font-semibold hidden md:flex">Menu</p>
                </div>
            </div>
            <div className="flex w-[100%] bg-[black] text-[#cce6ff]  font-normal py-6 justify-around cursor-pointer items-center ">
                <p className="hover:text-blue-500 transition-all duration-500">Home</p>
                <p className="hover:text-blue-500 transition-all duration-500">Collaborate</p>
                <p className="hover:text-blue-500 transition-all duration-500">E-Apps</p>
                <p className="hover:text-blue-500 transition-all duration-500">About Us</p>
                <p className="hover:text-blue-500 transition-all duration-500">Get Software</p>
            </div>
            {/* Menu Content */}
            <div className={`transition-all duration-1000 ease-in-out ${isMenuOpen ? 'opacity-100 h-[100vh]' : 'opacity-0 h-0'} overflow-hidden bg-black  pl-12 text-[20px] md:text-[30px] flex flex-col gap-[10px] font-medium`}>
                {isMenuOpen && (
                    <>
                        <Link href="*"><p className="transition-all duration-500 hover:text-[#5c48b8] text-[#cce6ff]">Programs</p></Link>
                        <Link href="*"><p className="transition-all duration-500 hover:text-[#5c48b8] text-[#cce6ff]">E-apps</p></Link>
                        <Link href="*"><p className="transition-all duration-500 hover:text-[#5c48b8] text-[#cce6ff]">Community</p></Link>
                        <Link href="*"><p className="transition-all duration-500 hover:text-[#5c48b8] text-[#cce6ff]">Resources</p></Link>
                        <Link href="*"><p className="transition-all duration-500 hover:text-[#5c48b8] text-[#cce6ff]">Learn</p></Link>
                        <Link href="*"><p className="transition-all duration-500 hover:text-[#5c48b8] text-[#cce6ff]">Empower Education</p></Link>
                        <Link href="*"><p className="transition-all duration-500 hover:text-[#5c48b8] text-[#cce6ff]">News & Event</p></Link>
                        <Link href="*"><p className="transition-all duration-500 hover:text-[#5c48b8] text-[#cce6ff]">Get the Software</p></Link>
                    </>
                )}
            </div>
        </nav>
    );
}
