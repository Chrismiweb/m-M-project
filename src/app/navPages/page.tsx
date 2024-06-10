import Link from "next/link"

export default function navPages(){
    return(
        <div className="w-[100%] "> 
               
                <div className="hidden font-mono font-bold  md:flex w-[100%] bg-[black] text-[#cce6ff] py-6 justify-around cursor-pointer items-center">
                    <p className="hover:text-blue-500 transition-all duration-500">Home</p>
                    <p className="hover:text-blue-500 transition-all duration-500">Collaborate</p>
                    <p className="hover:text-blue-500 transition-all duration-500">E-Apps</p>
                    <p className="hover:text-blue-500 transition-all duration-500">About Us</p>
                    <p className="hover:text-blue-500 transition-all duration-500">Get Software</p>
                </div>
            
            </div>
    )
}