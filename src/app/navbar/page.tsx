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
            <div className="w-[100%] py-4 flex px-4 items-center justify-between bg-[#151515]">
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
            {isMenuOpen && (
                <div className="w-[100%] ease-in-out h-[100vh] bg-white pt-[20px] pl-12 text-[20px] md:text-[30px] flex flex-col gap-[10px] font-medium">
                    <Link href="*"><p className="hover:text-blue-500">Programs</p></Link>
                    <Link href="*"><p className="hover:text-blue-500">E-apps</p></Link>
                    <Link href="*"><p className="hover:text-blue-500">Community</p></Link>
                    <Link href="*"><p className="hover:text-blue-500">Resources</p></Link>
                    <Link href="*"><p className="hover:text-blue-500">Learn</p></Link>
                    <Link href="*"><p className="hover:text-blue-500">Empower Education</p></Link>
                    <Link href="*"><p className="hover:text-blue-500">News & Event</p></Link>
                    <Link href="*"><p className="hover:text-blue-500">Get the Software</p></Link>
                </div>
            )}
        </nav>
    );
}
