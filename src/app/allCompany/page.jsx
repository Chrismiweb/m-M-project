// allCompany/page.js
import React from "react";
import { FaGreaterThan } from "react-icons/fa6";
import pics from "../image/bird.png"
import Image from 'next/image'
import Bubble from "../bubble/page" 

export default function AllCompany() {
    const companylist = [
        {
            logo: pics,
            companyName: "Company Name 1"
        },
        {
            logo: pics,
            companyName: "Company Name 2"
        },
        {
            logo: pics,
            companyName: "Company Name 3"
        },
        {
            logo: pics,
            companyName: "Company Name 4"
        },
        {
            logo: pics,
            companyName: "Company Name 5"
        },
        {
            logo: pics,
            companyName: "Company Name 6"
        },
        {
            logo: pics,
            companyName: "Company Name 4"
        },
        {
            logo: pics,
            companyName: "Company Name 5"
        },
        {
            logo: pics,
            companyName: "Company Name 6"
        },
        {
            logo: pics,
            companyName: "Company Name 4"
        },
        {
            logo: pics,
            companyName: "Company Name 5"
        },
        {
            logo: pics,
            companyName: "Company Name 6"
        },
    ];

    return (
        <div className="w-[100%] bg-[#151515] py-[100px]">
            <div className="w-[100%] bg-[#151515] flex flex-col justify-center items-center gap-[30px]">
                <h2 className="text-[27px] text-[#cce6ff] font-bold font-candara">All Companies</h2>
                <div className=" w-[100%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:px-2">

                    {companylist.map((cm, index) => (
                        <div key={index} className="bg-[#202020] border border-neutral-700 rounded-[10px] w-[100%] flex flex-col justify-center items-center gap-[20px] py-[50px]">
                            <div className='text-[10px] font-bold w-[200px] h-[200px] justify-center items-center flex'>
                                <Image src={cm.logo} alt="" />
                            </div>
                            <img src="" alt="" />
                            <p className="text-[#cce6ff] font-bold mb-[70px] flex justify-center text-[20px] mt-[30px] items-center gap-2 ">
                                {cm.companyName} <FaGreaterThan className="text-[#5c48b8]" />
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
