"use client"
import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
function page() {
    const[change, SetChange] = useState(false)
   
  return (
    <div className='w-[100%] justify-around items-center flex'>
        <h1 className='text-[30px]'>LOGO</h1>
        <div className='flex gap-[20px]'>
            <p>home</p>
            <p>contact us</p>
            <p>about us</p>
        </div>
        <div>
            <div className='cursor-pointer font-bold'
            onClick={()=>SetChange(!change)}
                >{change ? <IoClose/> : <CiMenuBurger/> }</div>
        </div>
    </div>
  )
}

export default page