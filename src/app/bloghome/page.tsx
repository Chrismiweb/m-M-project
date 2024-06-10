import man from '../image/man.png'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function bloghome(){

    const blogs = [
        {
            image: man,
            title: "Business Idea",
            titleDetails: "We offer corporate information, marketing services, and a sales hub."
        },
        {
            image: man,
            title: "Business Idea",
            titleDetails: "We offer corporate information, marketing services, and a sales hub."
        },
        {
            image: man,
            title: "Business Idea",
            titleDetails: "We offer corporate information, marketing services, and a sales hub."
        },
        {
            image: man,
            title: "Business Idea",
            titleDetails: "We offer corporate information, marketing services, and a sales hub."
        },
        {
            image: man,
            title: "Business Idea",
            titleDetails: "We offer corporate information, marketing services, and a sales hub."
        }, 
        {
            image: man,
            title: "Business Idea",
            titleDetails: "We offer corporate information, marketing services, and a sales hub."
        },

    ]
    return(
        <div className="blog1cont">
            <h1 className='text-[30px] font-bold w-[80%] text-[#cce6ff] text-center md:text-[50px] '>Learn The Latest Details</h1>
            <div className='w-[95%] justify-center items-center flex flex-col gap-[40px] md:grid-cols-3 md:grid md:pl-[20px]'>
                {blogs.map((b, index)=>(
                    <div key={index} className='w-[100%] bg-[black] pb-9 rounded-lg justify-center items-center flex flex-col gap-5  '>
                        <div className=''>
                            <Image
                            src={b.image} 
                            alt="" />
                        </div>
                        <div className='w-[80%]'>
                            <p className=' text-blue-500 font-bold text-[17px]'>{b.title}</p>
                            <p className='text-[20px] font-semibold text-[#cce6ff] md:text-[15px]'>{b.titleDetails}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className='text-blue-500 font-bold border-slate-400 hover:border-blue-500 border py-[15px] text-[18px] rounded-md px-[20px]'>View More from M & M</button>
            <div className='w-[100%] justify-center items-center flex flex-col gap-[20px]'>
                <div className='text-[20px] font-bold text-white w-[180px] h-[180px] rounded-[100%] bg-blue-500 justify-center items-center flex'>
                    Logo will be here
                </div>
                <h1 className='font-bold text-[22px] text-[#cce6ff] w-[70%] text-center'>Connect With Us On Social Media.</h1>
                <p className='w-[80%] text-center text-[#cce6ff]'>Engage in discussions about our newest projects.</p>
                <div className='flex gap-4 w-[100%] text-[white] justify-center items-center '>
                    <FaFacebookF/>
                    <FaLinkedin/>
                    <FaTwitter/>
                    <FaYoutube/>
                    <FaInstagramSquare/>

                </div>
            </div>
            
        </div>
    )
}