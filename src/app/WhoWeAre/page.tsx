import history from "../image/s3.png"
import Image from "next/image"
export default function WhoWeAre(){
    return(
        <div className="w-[100%] bg-[rgb(13,13,23)] justify-center py-[50px] px-[25px] md:px-[70px] gap-[30px]  flex flex-col">
            <div className="flex flex-col gap-0">
                <h1 className="text-[40px] text-blue-300 font-mono font-semibold">About Us</h1>
                <div className="w-[20%] bg-blue-500 h-1"></div>
            </div>
            <div className="flex flex-col gap-[10px] mt-[60px]">
                <h1 className="text-[30px]  font-mono font-bold text-blue-600">Who We Are</h1>
                <p className="font-serif text-[#cce6ff]">The JONEZY Corporate Website serves as the online face of our company, providing a comprehensive source of information about our organization, programs, services, and products. It is designed to offer detailed insights into who we are and what we do, ensuring that visitors can easily access the information they need. Additionally, the website functions as the central hub for our marketing campaigns, community engagement efforts, and sales activities. By integrating these essential functions, it plays a crucial role in connecting us with our audience, fostering engagement, and driving our business forward.</p>
            </div>
            <div>
                <div className="w-[100%] flex-col md:flex-row bg-[rgb(29,29,61)] md:px-[0px] md:py-[10px] px-3 py-[50px] flex mt-[20px] gap-[30px] font-serif">
                    <Image src={history} alt="" />
                    <div className="flex flex-col gap-[20px]">  
                        <h1 className="text-[30px] font-mono font-bold text-blue-600">Our History</h1>
                        <p className="text-[15px] text-[#cce6ff]">The JONEZY Corporate Website has grown from a basic informational site to a dynamic hub for our organization. Initially launched to provide details about our programs and services, it now integrates major software products, including our Learning Management System (LMS) and On-Demand App, enhancing user accessibility and engagement.

With the addition of an E-commerce Marketplace and E-shop, the website facilitates convenient online purchasing of our products and services. Our Online Courses further empower visitors with knowledge and skills that align with our mission of creating positive change.

Today, the JONEZY Corporate Website is central to our marketing, community engagement, and sales efforts, inspiring and empowering visitors to join us in making a meaningful impact.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}