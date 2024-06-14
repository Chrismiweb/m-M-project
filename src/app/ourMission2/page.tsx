import Image from "next/image"
import bg from "../image/sk.png"
import ceo from "../image/m1.png"

export default function ourMission2(){
    return(
        <div className="relative w-full py-[50px] md:h-[400px] overflow-hidden">
        <Image src={bg} alt="" className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"/>
        
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
        <div className="relative z-10 gap-[20px] flex flex-col md:flex-row items-center justify-center h-full text-white">
          <div className="text-[40px] font-bold font-mono">
                <Image src={ceo} alt="CEO Image" className="md:w-[200px] w-[300px] md:h-[200px] h-[300px] rounded-[100%]"/>
          </div>
          <div className=" hidden md:h-[200px] md:w-[1px] md:bg-white"></div>
          <div className="md:w-[60%] w-[90%] gap-[15px] flex flex-col">
              <p className="mt-2 text-[20px] text-center font-serif"> &quot;Our mission is to provide comprehensive information on our organization, programs, and services through the M&M Corporate Website. Featuring LMS, On-Demand App, E-commerce Marketplace, and Online Courses, we aim to engage and empower visitors to join us in creating positive change.&quot;</p>
              <p className="mt-[10px] font-bold">Chrismi Bitero</p>
              <p className="font-serif">President and Chief Executive Officer, Insight</p>
          </div>
        </div>
      </div>
    )
}