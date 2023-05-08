import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm"
import Navbar from "../Components/Navbar";
import AboutImg from "../assets/bali.jpg"
//import Contact1 from "../Components/Contact1";


function Contact (){
    return(
     <>
     <Navbar/>
     <Hero cName="hero-mid"heroImg={AboutImg}title="Contact"btnClass="hide"/>
     {/* <Contact1/> */}
     <ContactForm/>
     
     <Footer/>
     </>
    )
 }
 
 export default Contact;