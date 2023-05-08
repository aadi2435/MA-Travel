//import Trip from "./Trip";
import "./TripStyles.css";

function TripData(props){
    return(
        <div className="t-card">
            <div className="t-image">
                <img  src={props.image} alt="image"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <button onClick={() => console.log("Button clicked")}>Learn More</button>
        </div>
    );
}

export default TripData;