import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/3.jpg"
import Trip2 from "../assets/10.jpg"
import Trip3 from "../assets/11.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>you can discover unique destinations using google maps.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading = "Trip of Paris"
                text = "The estimated 2.2 million inhabitants of Paris are all very proud to be Parisian, and so they should be. Which city has been more romanticized in literature and film? In fact there are 65 films (and counting) that star the Eiffel Tower as a significant feature. And that's just a small fraction of the number of films that merely feature the Eiffel Tower either as a symbol of French or European lifestyle or as an example of something beautiful."
                />
                

                <TripData
                image={Trip2}
                heading = "Trip of Bali"
                text = "Bali Island according to the ancient inscription of Blanjong written 835 Saka or 913 century which is released by Sri Kesari Warmadewa Kingdom that Bali Island is called ‘Bali Dwipa’. Meanwhile, Dwipa means island. The Bali Dwipa might be given by traditional merchants from India who the first time arrive on the island. They meet the local people full of religious activities by using the offerings (Banten). Base on the event they called Bali is Bali Dwipa."
                />

                <TripData
                image={Trip3}
                heading = "Trip of Maldives"
                text = "The country covers an area approximately 90,000 square kilometres, of which only 298 square kilometres is dry land. The islands are of average one to two square kilometres in area, and no individual island is longer than eight kilometres. The Maldives lies between 1-1.5 meters above sea level, with the highest island situated at 3 meters above sea level.Want to be the envy of all your friends? Just casually drop I’m holiday-making in the Maldives"
                />
            </div>
        </div>
        
    );
}

export default Trip;