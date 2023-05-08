import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
 //import Signup from "./routes/Signup";
import Travelplain from "./routes/Travelplain";
import LoginSignupContainer from "./Components/LoginSignupContainer/LoginSignupContainer";
import Price from "./Components/Price";
import Price1 from "./Components/Price1";
import Price2 from "./Components/Price2";
import Price3 from "./Components/Price3";
import Price4 from "./Components/Price4";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/Contact" element={<Contact/>}/>
         {/* <Route path="/signup" element={<Signup/>}/>  */}
        <Route path="/Travelplain" element={<Travelplain/>}/>
         <Route path="/LoginSignupContainer" element={<LoginSignupContainer/>}/> 
         <Route path="/price" element={<Price />}/>
         <Route path="/price1" element={<Price1 />}/>
         <Route path="/price2" element={<Price2 />}/>
         <Route path="/price3" element={<Price3 />}/>
         <Route path="/price4" element={<Price4 />}/>  
      </Routes>
    </div>
  );
}
export default App

 