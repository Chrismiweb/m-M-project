import React from "react";
import { FaGreaterThan } from "react-icons/fa6";
import Image from 'next/image';

export default function BusinessCompany() {
    const companylist = [
        {
            logo: '/images/bird.png',
            companyName: "Company Name 1"
        },
        {
            logo: '/images/bird.png',
            companyName: "Company Name 2"
        },
        {
            logo: '/images/bird.png',
            companyName: "Company Name 3"
        },
        {
            logo: '/images/bird.png',
            companyName: "Company Name 4"
        },
        {
            logo: '/images/bird.png',
            companyName: "Company Name 5"
        },
    ];

    return (
        <div className="w-[100%] bg-[black] py-[100px]">
        <div className="w-[100%] bg-[black] flex flex-col justify-center items-center gap-[30px]">
            <h2 className="text-[27px] text-[#cce6ff] font-bold font-candara">Business Companies</h2>
            <div className=" w-[100%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:px-2">

                {companylist.map((cm, index) => (
                    <div key={index} className="borderContainer">
                        <div className='text-[10px] font-bold w-[200px] h-[200px] justify-center items-center flex'>
                            <Image src={cm.logo} width={200} height={200} alt="" />
                        </div>
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
