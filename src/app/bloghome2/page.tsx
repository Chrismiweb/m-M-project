import people from '../image/people.png'
import Image from 'next/image'
import s1 from "../image/s1.png"
import s2 from "../image/s2.png"
import s3 from "../image/s3.png"
export default function bloghome2(){
    const lineOne = [
        {
            image : people,
            header : "Our timeline.",
            content : "The M&M Corporate Website serves as the online face of our company, offering comprehensive information about our organization, programs, services, and products.",
            learn : "Learn More"
        },
        {
            image : s1,
            header : "Our timeline.",
            content : "The M&M Corporate Website serves as the online face of our company, offering comprehensive information about our organization, programs, services, and products.",
            learn : "Learn More"
        },
    ]
    const lineTwo = [
        {
            image : s2,
            header : "Our timeline.",
            content : "The M&M Corporate Website serves as the online face of our company, offering comprehensive information about our organization, programs, services, and products.",
            learn : "Learn More"
        },
        {
            image : s3,
            header : "Our timeline.",
            content : "The M&M Corporate Website serves as the online face of our company, offering comprehensive information about our organization, programs, services, and products.",
            learn : "Learn More"
        },
    ]
    return(
        <div className="blog2">
            <div className='flex-col flex md:flex-row w-[100%] justify-center items-center gap-[20px]'>
                {lineOne.map((lone, index)=>(
                    <div key={index} className='w-[90%] md:w-[40%] bg-[#001a33] flex flex-col gap-[20px]'>
                        <div className='w-[100%] h-[300px] overflow-hidden'>
                            <Image 
                            src = {lone.image}
                            alt =''/>
                        </div>
                        <div className='flex flex-col gap-3 px-[20px] py-[25px]'>
                            <h1 className='text-[30px] text-[#cce6ff] font-semibold'>{lone.header}</h1>
                            <p className='text-white'>{lone.content}</p>
                            <p className='text-red-500 font-semibold cursor-pointer'>{lone.learn} </p>
                        </div>
                    </div>
                ))}
                
            </div>
            <div className='flex-col flex md:flex-row w-[100%] justify-center items-center gap-[20px]'>
                {lineTwo.map((ltwo, index)=>(
                        <div key={index} className='w-[90%] md:w-[40%] bg-[#001a33] flex flex-col gap-[20px]'>
                        <div className='w-[100%] h-[300px] overflow-hidden'>
                            <Image 
                            src = {ltwo.image}
                            alt =''/>
                        </div>
                        <div className='flex flex-col gap-3 px-[20px] py-[25px]'>
                            <h1 className='text-[30px] text-[#cce6ff] font-semibold'>{ltwo.header}</h1>
                            <p className='text-white'>{ltwo.content}</p>
                            <p className='text-red-500 font-semibold cursor-pointer'>{ltwo.learn} </p>
                        </div>
                    </div>
                    ))}
            </div>

        </div>
    )
}