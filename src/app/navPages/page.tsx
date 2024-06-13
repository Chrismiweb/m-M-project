import Link from "next/link"
import React from "react";

export default function navPages(){
    return(
        <div className="w-[100%] "> 
               
                <div className="hidden font-mono font-bold  md:flex w-[100%] bg-[black] text-[#cce6ff] py-6 justify-around cursor-pointer items-center">
                    <Link href={'/'}><p className="hover:text-blue-500 transition-all duration-500">Home</p></Link>
                    <p className="hover:text-blue-500 transition-all duration-500">Careers</p>
                    <p className="hover:text-blue-500 transition-all duration-500"> Subsidiary Companies</p>
                    <p className="hover:text-blue-500 transition-all duration-500">Get Software</p>
                    <Link href={'/aboutUsPage'}><p className="hover:text-blue-500 transition-all duration-500">About Us</p></Link>
                    <p className="hover:text-blue-500 transition-all duration-500">Contact Us</p>

                </div>
            
            </div>
    )
}