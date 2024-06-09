import Link from "next/link"
import { IoClose } from "react-icons/io5";

export default function navbar2(){
    return(
        <nav className="w-[100%] justify-between items-center h-[100vh] bg-white">
            {/* <div className="w-[100%] py-4 flex px-4 items-center gap-[500px] bg-white">
               <Link href="/navbar">
                    <div className="flex justify-center items-center gap-1 cursor-pointer">
                        <IoClose className="text-blue-500 text-[30px]"/>
                        <p className="text-[20px] font-semibold text-blue-500">Close</p>
                    </div>
                </Link>
                <h1 className="text-blue-500 text-center text-[20px] font-bold">M & M LOGO</h1>
            </div> */}
            <div className="w-[100%] py-4 flex px-4 items-center gap-[90px] md:gap-[500px] bg-white ">
               {/* <Link href="/navbar"> */}
                    <div className="flex justify-center items-center gap-1 cursor-pointer">
                        <IoClose className="text-blue-500 text-[30px]"/>
                        <p className="text-[20px] font-semibold text-blue-500 hidden md:flex">Menu</p>
                    </div>
                {/* </Link> */}
                <h1 className="text-blue-500 text-center text-[20px] font-bold">M & M LOGO</h1>
            </div>
            <div className="w-[100%] bg-white pt-[20px] pl-12 text-[20px] md:text-[30px] flex flex-col gap-[10px] font-medium ">
                <Link href="*"><p className="hover:text-blue-500">Programs</p></Link>
                <Link href="*"><p className="hover:text-blue-500">E-apps</p></Link>
                <Link href="*"><p className="hover:text-blue-500">Community</p></Link>
                <Link href="*"><p className="hover:text-blue-500">Resources</p></Link>
                <Link href="*"><p className="hover:text-blue-500">Learn</p></Link>
                <Link href="*"><p className="hover:text-blue-500">Empower Education</p></Link>
                <Link href="*"><p className="hover:text-blue-500">News & Event</p></Link>
                <Link href="*"><p className="hover:text-blue-500">Get the Software</p></Link>
            </div>
            <div>

            </div>
           
        </nav>
    )
}