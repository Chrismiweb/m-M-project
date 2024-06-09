import Hero from '../image/hero.png'
import Image from 'next/image'
export default function hero(){
    return(
        <div className="w-[100%]">
            <div className="w-[80%] items-center justify-center flex flex-col gap-[20px] md:w-[50%]">
              <p className="text-white font-semibold text-[23px]">M&M Corporate </p>
              <h1 className="text-center font-bold text-[30px] text-white md:text-[45px]">We Provide Company Info, Marketing, And Sales Hub.</h1>
              <p className="underline text-white md:text-[18px] font-semibold cursor-pointer">Discover More </p>
            </div>
            <div className="md:w-[30%] justify-center items-center flex">
              {/* <div className=" mt-[50px] overflow-hidden w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-slate-500 text-white rounded-[100%] items-center justify-center flex"> */}
                    <Image
                     src={Hero} alt="" />
              {/* </div> */}
            </div>
      </div>
    )
}