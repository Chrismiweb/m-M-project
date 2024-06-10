'use client';

import React from "react";
import Navbar from "../navbar/page"
import SelectCompany from "../selectCompany/page";
import AllCompany from "../allCompany/page";
import Footer from "../footer/page"
export default function companyPage(){
  
    return(
        <div className="w-[100%] font-mono flex flex-col bg-[black]">
            <Navbar/>
            <SelectCompany/>
            <Footer/>

            {/* <AllCompany/> */}
        </div>
    )
}