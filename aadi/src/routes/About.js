import About1 from "../Components/About1";
import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
//import Trip from "../Components/Trip";
import AboutImg from "../assets/night.jpg"


function About (){
    return(
     <>
     <Navbar/>
     <Hero
    cName="hero-mid"
    heroImg={AboutImg}
    title="About"
    btnClass="hide"
    />
    <AboutUs/>
    <About1/>
    {/*<Trip/>*/}
    <Footer/>
     </>
    )
 }
 
 export default About;