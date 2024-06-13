import man from '../image/man.png'
import Image from 'next/image'
import g1 from '../image/g1.jpg'
import g2 from '../image/g2.png'
import g3 from '../image/g3.png'
import g4 from '../image/g4.png'
import g5 from '../image/g5.png'


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
            image: g1,
            title: "Business Idea",
            titleDetails: "We offer corporate information, marketing services, and a sales hub."
        },
        {
            image: g2,
            title: "Business Idea",
            titleDetails: "We offer corporate information, marketing services, and a sales hub."
        },
        {
            image: g3,
            title: "Business Idea",
            titleDetails: "We offer corporate information, marketing services, and a sales hub."
        },
        {
            image: g4,
            title: "Business Idea",
            titleDetails: "We offer corporate information, marketing services, and a sales hub."
        }, 
        {
            image: g5,
            title: "Business Idea",
            titleDetails: "We offer corporate information, marketing services, and a sales hub."
        },

    ]
    return(
        <div className="blog1cont font-mono">
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
            <button className='text-blue-500 font-bold border-slate-400 hover:border-blue-500 border py-[15px] text-[18px] rounded-md px-[20px]'>View More from JONEZY</button>
            <div className='w-[100%] justify-center items-center flex flex-col gap-[20px]'>
                <div className='text-[20px] text-center font-bold text-white w-[180px] h-[180px] rounded-[100%] bg-blue-500 justify-center items-center flex'>
                    Logo will be here
                </div>
                <h1 className='font-bold text-[22px] text-[#cce6ff] w-[70%] text-center'>Connect With Us On Social Media.</h1>
                <p className='w-[80%] text-center text-[#cce6ff]'>Engage in discussions about our newest projects.</p>
                <div className=' flex gap-4 w-[100%] text-[white] justify-center items-center '>
                    <FaFacebookF className='cursor-pointer'/>
                    <FaLinkedin className='cursor-pointer'/>
                    <FaTwitter className='cursor-pointer'/>
                    <FaYoutube className='cursor-pointer'/>
                    <FaInstagramSquare className='cursor-pointer'/>

                </div>
            </div>
            
        </div>
    )
}