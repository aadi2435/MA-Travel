import Destination from "../Components/Destination";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Price from "../Components/Price";
import Text from "../Components/Text";
//import Trip from "../Components/Trip";

function Home (){
   return(
    <>
    <Navbar/>
    <Hero
    cName="hero"
    heroImg="https://github.com/tech2etc/React-Trippy-Tour-Website-Template/blob/main/src/assets/12.jpg?raw=true"
    title="Your journey Your Story"
    text="Choose Your Favourite Destination."
    buttonText="Travel plan"
    url="/Travelplain"
    btnClass="show"
    />
    <Text/>
    <Destination/>
    {/*<Trip/>*/}
    <Price/>
    <Footer/>
    </>
   )
}

export default Home;