// businessCompany.js
import React from "react";
import { FaGreaterThan } from "react-icons/fa6";

export default function BusinessCompany() {
    const companylist = [
        {
            logo: "Logo will be here ",
            companyName: "Business Name "
        },
        {
            logo: "Logo will be here",
            companyName: "Business Name "
        },
        {
            logo: "Logo will be here",
            companyName: "Business Name "
        },
        {
            logo: "Logo will be here",
            companyName: "Business Name "
        },
        {
            logo: "Logo will be here",
            companyName: "Business Name "
        },
        {
            logo: "Logo will be here",
            companyName: "Business Name "
        },
        // Add more companies as needed
    ];

    return (
        <div className="w-[100%] bg-blue-100 py-[100px]">
            <div className="w-[100%] bg-blue-100 flex flex-col justify-center items-center gap-[30px]">
                <h2 className="text-[24px] font-bold">Business Companies</h2>
                <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:px-2">
                    {companylist.map((cm, index) => (
                        <div key={index} className="bg-white w-[100%] flex flex-col justify-center items-center gap-[20px] py-[50px]">
                            <div className='text-[10px] font-bold text-white w-[140px] h-[140px] rounded-[100%] bg-orange-500 justify-center items-center flex'>
                                {cm.logo}
                            </div>
                            <p className="text-black mb-[70px] flex justify-center text-[20px] mt-[30px] items-center gap-2 ">
                                {cm.companyName} <FaGreaterThan className="text-blue-500" />
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
