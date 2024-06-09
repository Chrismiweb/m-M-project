import Link from "next/link"

export default function navPages(){
    return(
        <div className="w-[100%] py-8 px-2 justify-around font-medium bg-white hidden md:flex flex-row items-center "> 
                <Link href="*"><p className="hover:text-blue-500">Programs</p></Link>
                <Link href="*"><p className="hover:text-blue-500">E-apps</p></Link>
                <Link href="*"><p className="hover:text-blue-500">Community</p></Link>
                <Link href="*"><p className="hover:text-blue-500">Resources</p></Link>
                <Link href="*"><p className="hover:text-blue-500">Learn</p></Link>
                {/* <Link href="*"><p className="hover:text-blue-500">Empower Education</p></Link>
                <Link href="*"><p className="hover:text-blue-500">News & Event</p></Link>
                <Link href="*"><p className="hover:text-blue-500">Get the Software</p></Link> */}
            {/* <Link href="*"><p className="hover:text-blue-500">About Us</p></Link>
                <Link href="*"><p className="hover:text-blue-500">Contact Us</p></Link>
                <Link href="*"><p className="hover:text-blue-500">Collaborate</p></Link>
                <Link href="*"><p className="hover:text-blue-500">Log In</p></Link>
                <Link href="*"><p className="hover:text-blue-500">Sign Up</p></Link> */}
            </div>
    )
}