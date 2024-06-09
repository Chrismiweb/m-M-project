'use client';

import React from "react";
import Navbar from "../navbar/page"
import SelectCompany from "../selectCompany/page";
import AllCompany from "../allCompany/page";
export default function companyPage(){
  
    return(
        <div className="w-[100%]">
            <Navbar/>
            <SelectCompany/>
            {/* <AllCompany/> */}
        </div>
    )
}