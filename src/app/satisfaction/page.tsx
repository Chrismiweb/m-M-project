import { AiFillSmile } from "react-icons/ai";
import { FaThumbsUp } from "react-icons/fa6";
import { GrDocumentPerformance } from "react-icons/gr";
import { MdContacts } from "react-icons/md";
export default function satisfaction(){
    const item = [
      {  "imaage" : <AiFillSmile />,
        "head": "100%",
        "content": "Customer Satisfaction Rate",
    },
    {  "imaage": <FaThumbsUp /> ,
    "head": "333k",
    "content": "Success Index",
    }
]
    const item2 =[
        {  "imaage":<GrDocumentPerformance /> ,
    "head": "100%",
    "content": "Monthly Performance",
    },
    {  "imaage": <MdContacts /> ,
    "head": "100%",
    "content": "Concersion Rate",
    },
    ]
    
    return(
         <div className=" w-[100%] bg-black py-[100px] flex flex-col justify-center items-center gap-3">
        <div className="w-[100%] md:flex-row flex-col justify-center items-center gap-5 flex">
        {item.map((i, index)=>(
                <div key={index} className="w-[80%] md:w-[25%] gap-8 py-[30px] items-center flex pl-[20px] h-[50px] bg-[#001a33]">
                    <div className="text-blue-500 text-[30px]">{i.imaage}</div>
                    <div>
                        <h1 className="font-bold">{i.head}</h1>
                         <p className="text-slate-400">{i.content}</p>
                    </div>
                </div>
         ))}
        </div>
        <div className="w-[100%] md:flex-row flex-col justify-center items-center gap-5 flex">


         {item2.map((j, index)=>(
                                <div key={index} className="w-[80%] md:w-[25%] gap-8 py-[30px] items-center flex pl-[20px] h-[50px] bg-[#001a33]">

                    <div className="text-blue-500 text-[30px]">{j.imaage}</div>
                    <div>
                        <h1 className="font-bold">{j.head}</h1>
                         <p className="text-slate-400">{j.content}</p>
                    </div>
                </div>
         ))}
        </div>

         </div>
    )
}