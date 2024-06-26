'use client';

import React, { useState } from "react";
import AllCompany from "../allCompany/page";
import EntertainmentCompany from "../entertainmentCompany/page";
import BusinessCompany from "../businessCompany/page";
import TechnologyCompany from "../technologyCompany/page";
import MoneyCompany from "../moneyCompany/page";

const categoryComponents: { [key: string]: React.ComponentType } = {
    "": AllCompany,
    "Entertainment": EntertainmentCompany,
    "Business": BusinessCompany,
    "Technology": TechnologyCompany,
    "Money": MoneyCompany,
};

export default function CompanyPage() {
    const [selectedCategory, setSelectedCategory] = useState<keyof typeof categoryComponents>("");

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value as keyof typeof categoryComponents);
    };

    const handleDesktopCategoryChange = (category: keyof typeof categoryComponents) => {
        setSelectedCategory(category);
    };

    const SelectedComponent = categoryComponents[selectedCategory] || AllCompany;

    const getClassNames = (category: keyof typeof categoryComponents) => {
        return `cursor-pointer py-2 ${
            selectedCategory === category
                ? "text-blue-500 border-b-2 border-blue-500 font-bold"
                : "text-[#cce6ff] font-bold"
        }`;
    };

    return (
        <div className="w-[100%] bg-[#151515]">
            <div className="containerBg">
                <h1 className="md:text-[55px] text-[35px] text-blue-500 font-extrabold text-center mb-[50px] mt-[30px]">Our Companies</h1>
                <div className="w-[100%] px-[20px] justify-center items-center">
                    {/* for mobile */}
                    <select
                        value={selectedCategory}
                        onChange={handleSelectChange}
                        className="w-[100%] md:hidden bg-[#cce6ff] rounded-[5px] border font-semibold border-black h-[40px] px-[20px]"
                    >
                        <option value="">All Company</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Business">Business</option>
                        <option value="Technology">Technology</option>
                        <option value="Money">Money</option>
                    </select>
                </div>
                {/* for desktop */}
                <div className="w-[100%] hidden md:flex justify-evenly mt-[20px]">
                    <p className={getClassNames("")} onClick={() => handleDesktopCategoryChange("")}>All Company</p>
                    <p className={getClassNames("Entertainment")} onClick={() => handleDesktopCategoryChange("Entertainment")}>Entertainment</p>
                    <p className={getClassNames("Business")} onClick={() => handleDesktopCategoryChange("Business")}>Business</p>
                    <p className={getClassNames("Technology")} onClick={() => handleDesktopCategoryChange("Technology")}>Technology</p>
                    <p className={getClassNames("Money")} onClick={() => handleDesktopCategoryChange("Money")}>Money</p>
                </div>
                <div className="w-[100%] px-[20px] mt-[20px]">
                    <SelectedComponent />
                </div>
            </div>
        </div>
    );
}
