import { FaGreaterThan } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
export default function company(){
    const companylist= [
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
    ]
    return(
    <div className="w-[100%] bg-[black]">
        <div className="w-[100%] flex justify-center items-center py-[50px]">
            <h1 className="md:text-[35px] text-[#cce6ff] text-[30px] font-bold text-center">Discover what we’re all about</h1>
        </div>
        <div className="overflow-x-auto flex gap-6 whitespace-nowrap p-4 rounded-lg">
                {companylist.map((cm,index)=>(
                    
                    <div key={index} className="h-[400px] transition-all duration-500 px-[80px] w-[1000px] hover:bg-[black] gap-5 p-4 border border-slate-500 rounded-[10px] bg-[#202020] text-white flex-col text-center justify-center items-center flex ">
                       <div className='text-[10px] font-bold w-[200px] h-[200px] justify-center items-center flex'>
                            <Image src={cm.logo} width={200} height={200} alt="" />
                        </div>
                        <p className="text-[#cce6ff] font-bold mb-[70px] flex justify-center text-[20px] mt-[30px] items-center gap-2 ">
                            {cm.companyName} <FaGreaterThan className="text-[#5c48b8]" />
                        </p>
                    </div>
                ))}
                
        </div>
        <div className="w-[100%] flex justify-center items-center py-[50px]">
            <Link href="/companyPage">
                <button className="bg-blue-500  transition-all duration-500 text-white hover:bg-blue-700  p-[16px] rounded-lg font-bold ">See All M & M Company</button>
            </Link>
        </div>
    </div>
    )
}