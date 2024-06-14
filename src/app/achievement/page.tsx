import Satisfaction from "../satisfaction/page"
export default function achievement(){
    return(
        <div className="w-[100%] pt-[30px] bg-black flex items-center justify-center flex-col">
             <div className="flex w-[100%] justify-center items-center px-[15px] flex-col gap-1">
                <h1 className=" text-[30px] text-center md:text-[40px] text-blue-300 font-mono font-semibold">Insight by the numbers</h1>
                <div className="w-[25%] bg-blue-500 h-1"></div>
            </div>
            <Satisfaction/>
            <button className="bg-blue-600 font-mono transition-all ease-in-out duration-500 text-white font-semibold hover:bg-blue-700  py-[15px] px-[30px]">How Can We Help You?</button>]
            <div className="w-[100%] bg-gradient-to-r from-blue-600 to-[#001a33] flex justify-center items-center py-[20px]">
                <h1 className="text-[20px] font-mono text-white px-[10px] text-center">We Provide Company Info, Marketing, And Sales Hub.</h1>
            </div>
        </div>
    )
}