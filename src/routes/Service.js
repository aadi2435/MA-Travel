//  import Calendar from "../Components/Calender";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Trip from "../Components/Trip";
import AboutImg from "../assets/ma.jpg"


function Service (){
    return(
     <>
     <Navbar/>
     <Hero cName="hero-mid"heroImg={AboutImg}title="Service"btnClass="hide"/>
     <Trip/>
     {/* <Calendar/> */}
     <Footer/>
     </>
    )
 }
 
 export default Service;