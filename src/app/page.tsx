import Navbar from "./navbar/page"
import Hero from "./hero/page"
import Bloghome from "./bloghome/page"
import Footer from "./footer/page"
import Bloghome2 from "./bloghome2/page"
import Company from "./companies/page"
import NavPage from "./navPages/page"
export default function home(){
  return(
    <div>
      <Navbar/>
      <NavPage/>
      <Hero/>
      <Company/>
      <Bloghome/>
      <Bloghome2/>
      <Footer/>
    </div>
  )
}