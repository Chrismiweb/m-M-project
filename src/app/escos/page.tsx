import Image from "next/image"
import ceo from "../image/m1.png"
export default function esco(){
    const escodetails = [
        {
            image: ceo,
            name: "Chrismi Bitero",
            position: "President and Chief Executive Officer, Insight"
        },
        {
            image: ceo,
            name: "Chrismi Bitero",
            position: "President and Chief Executive Officer, Insight"
        },{
            image: ceo,
            name: "Chrismi Bitero",
            position: "President and Chief Executive Officer, Insight"
        },
    ]
    return(
        <div className="w-[100%] bg-[rgb(0,26,51)] justify-center py-[50px] px-[20px] md:px-[70px] gap-[30px]  flex flex-col">
            <div className="w-[100%] flex-col md:flex-row flex gap-[50px] justify-center items-center ">
                {escodetails.map((e,index)=>(
                    <div key={index} className="md:w-[25%] w-[100%] flex flex-col justify-center items-center">
                        <div className="w-[250px] h-[250px] flex justify-center items-center rounded-[100%] bg-black">
                            <Image src={e.image} alt="CEO Image" className="w-[250px] h-[250px] rounded-[100%]"/>
                        </div>
                        <h1 className="font-mono text-[20px] text-blue-200 font-bold">{e.name} </h1>
                        <p className="text-white w-[70%] text-center">{e.position}</p>
                    </div>
                ))}
            </div>
            <div className="w-[100%] flex-col md:flex-row flex gap-[50px] justify-center items-center">
                {escodetails.map((e, index)=>(
                    <div key={index} className="md:w-[25%] w-[100%] flex flex-col justify-center items-center">
                        <div className="w-[250px] h-[250px] flex justify-center items-center rounded-[100%] bg-black">
                            <Image src={e.image} alt="CEO Image" className="w-[250px] h-[250px] rounded-[100%]"/>
                        </div>
                        <h1 className="font-mono text-[20px] text-blue-200 font-bold">{e.name} </h1>
                        <p className="text-white w-[70%] text-center">{e.position}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}