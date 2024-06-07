import Navbar from "./navbar/page"
import Hero from "./hero/page"
import Bloghome from "./bloghome/page"
export default function home(){
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Bloghome/>

    </div>
  )
}