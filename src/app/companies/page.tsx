import { FaGreaterThan } from "react-icons/fa6";
import Link from "next/link";
export default function company(){
    const companylist= [
        {
            logo:"Logo will be here ",
            companyName: "Company Name"
        },
        {
            logo:"Logo will be here",
            companyName: "Company Name"
        },
        {
            logo:"Logo will be here ",
            companyName: "Company Name"
        },
        {
            logo:"Logo will be here ",
            companyName: "Company Name"
        },
        {
            logo:"Logo will be here ",
            companyName: "Company Name"
        },
        {
            logo:"Logo will be here ",
            companyName: "Company Name"
        },
    ]
    return(
    <div className="w-[100%] bg-blue-100">
        <div className="w-[100%] flex justify-center items-center py-[50px]">
            <h1 className="md:text-[35px] text-[30px] font-bold text-center">Discover what we’re all about</h1>
        </div>
        <div className="overflow-x-auto flex gap-6 whitespace-nowrap p-4 border border-gray-300 rounded-lg">
                {companylist.map((cm)=>(
                    <div className="h-[400px] px-[80px] w-[1000px] gap-5 p-4 bg-white text-white flex-col text-center justify-center items-center flex transition-transform transform">
                        <div className='text-[10px] font-bold text-white w-[140px] h-[140px] rounded-[100%] bg-blue-500 justify-center items-center flex'>
                            {cm.logo}
                        </div>
                        <p className="text-black mb-[70px] flex justify-center text-[20px] items-center gap-2 ">{cm.companyName} <FaGreaterThan className="text-blue-500" /></p>
                    </div>
                ))}
                
        </div>
        <div className="w-[100%] flex justify-center items-center py-[50px]">
            <Link href="/companyPage">
                <button className="bg-blue-500 text-white hover:bg-blue-600 p-[16px] rounded-lg font-bold ">See All M & M Company</button>
            </Link>
        </div>
    </div>
    )
}