"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import hero from "../image/hero.png"



export default function herotest() {
    const [text, setText] = useState("");
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const words = [
        "We Provide Company Info, Marketing, And Sales Hub.",
        "We offer full details on our organization and offerings",
        "We are the hub for marketing, community engagement, and sales."
    ];

    const handleText = () => {
        const currentWord = words[currentWordIndex];
        if (text.length < currentWord.length) {
            setText(currentWord.substring(0, text.length + 1));
        } else {
            setTimeout(() => {
                setCurrentWordIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
                setText("");
            }, 1500); // Decreased pause duration for faster typing
        }
    };

    useEffect(() => {
        const textInterval = setInterval(handleText, 50); // Decreased interval duration for faster typing
        return () => {
            clearInterval(textInterval);
        };
    }, [text, currentWordIndex]);

    return (
        <div className='relative w-full overflow-hidden'>
            <video autoPlay loop muted playsInline className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2">
                <source src="/bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

            <div className="relative z-10  justify-center h-full text-white w-[100%] flex flex-col md:flex md:flex-row md:justify-around items-center py-[80px]">
            <div className="w-[80%] items-center justify-center flex flex-col gap-[20px] md:w-[50%]">
                <p className="font-extrabold font-mono text-[23px] text-blue-500 ">JONEZY Corporate</p>
                <h1 className="text-center md:h-[300px] h-[200px] font-bold text-[30px] font-mono text-white md:text-[45px]">
                    <span>{text}</span>
                </h1>
                <button className='text-white mt-[40px] bg-blue-500 font-mono font-semibold transition-all duration-500 hover:bg-blue-700 rounded-[5px] py-[13px] px-[20px]'>Discover More</button>
            </div>
            <div className="md:w-[30%] justify-center items-center flex">
                {/* Your image component here */}
                <Image
                     src={hero} alt="" />
            </div>
        </div>
        </div>
    );
}
