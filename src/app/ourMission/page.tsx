// import mission from "./mission.mp4"
export default function ourMission(){
    return(
        <div className="relative w-full md:h-[400px] h-[300px] overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2">
        <source src="/mission.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-[40px] font-bold font-mono text-[#cce6ff]">OUR MISSION</h1>
        <p className="mt-2 text-center w-[90%] md:w-[70%] font-serif">The JONEZY Corporate Website offers information on our organization, programs, and services. Featuring LMS, On-Demand App, E-commerce Marketplace, and Online Courses, we aim to engage and empower visitors to join our mission for positive change.</p>
      </div>
    </div>
    )
}