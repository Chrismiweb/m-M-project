import people from '../image/people.png'
import Image from 'next/image'
export default function bloghome2(){
    const lineOne = [
        {
            image : people,
            header : "Our timeline.",
            content : "The M&M Corporate Website serves as the online face of our company, offering comprehensive information about our organization, programs, services, and products.",
            learn : "Learn More"
        },
        {
            image : people,
            header : "Our timeline.",
            content : "The M&M Corporate Website serves as the online face of our company, offering comprehensive information about our organization, programs, services, and products.",
            learn : "Learn More"
        },
    ]
    const lineTwo = [
        {
            image : people,
            header : "Our timeline.",
            content : "The M&M Corporate Website serves as the online face of our company, offering comprehensive information about our organization, programs, services, and products.",
            learn : "Learn More"
        },
        {
            image : people,
            header : "Our timeline.",
            content : "The M&M Corporate Website serves as the online face of our company, offering comprehensive information about our organization, programs, services, and products.",
            learn : "Learn More"
        },
    ]
    return(
        <div className="w-[100%] py-[50px] flex flex-col gap-[20px] bg-blue-200">
            <div className='flex-col flex md:flex-row w-[100%] justify-center items-center gap-[20px]'>
                {lineOne.map((lone, index)=>(
                    <div key={index} className='w-[90%] md:w-[40%] bg-white flex flex-col gap-[20px]'>
                        <div className='w-[100%]'>
                            <Image 
                            src = {lone.image}
                            alt =''/>
                        </div>
                        <div className='flex flex-col gap-3 px-[20px] py-[25px]'>
                            <h1 className='text-[30px] font-semibold'>{lone.header}</h1>
                            <p>{lone.content}</p>
                            <p className='text-red-500 font-semibold cursor-pointer'>{lone.learn} </p>
                        </div>
                    </div>
                ))}
                
            </div>
            <div className='flex-col flex md:flex-row w-[100%] justify-center items-center gap-[20px]'>
                {lineTwo.map((ltwo, index)=>(
                        <div key={index} className='w-[90%] md:w-[40%]  bg-white flex flex-col gap-[20px]'>
                            <div className='w-[100%]'>
                                <Image 
                                src = {ltwo.image}
                                alt =''/>
                            </div>
                            <div className='flex flex-col gap-3 px-[20px] py-[25px]'>
                                <h1 className='text-[30px] font-semibold'>{ltwo.header}</h1>
                                <p>{ltwo.content}</p>
                                <p className='text-red-500 font-semibold cursor-pointer'>{ltwo.learn} </p>
                            </div>
                        </div>
                    ))}
            </div>

        </div>
    )
}