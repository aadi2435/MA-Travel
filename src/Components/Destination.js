import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";



const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>

            <DestinationData
            className="first-des"
                heading="Taal Volcano, Batangas"
                text="Located in Batangas, Taal is part of a group of volcanoes on the Macolod Corridor. This rift zone or the area where linear cracks develop stretches for about 50-60 kilometers and includes Mt. Makiling bordering Batangas and Laguna, Mt. Bahanaw located between Laguna and Quezon, and the Seven Lakes of San Pablo in Laguna."
                img1={Mountain1}
                img2={Mountain2}
            />

            <DestinationData
            className="first-des-reverse"
                heading="MT.Daguldul, Batangas"
                text="Why do I climb mountains? Why do I keep challenging myself? Is it for the love of nature? Or achieving something spectacular? What do I get from climbing up a mountain summit? Exhaustion. The same damn view of the valleys below. Scars. I don’t have definite answers to each of these questions but whenever the mountains call, I always heed and go. It’s the same for this hike in Mt. Daguldol. I have not hiked a single mountain since Mt. Mapalad six effing months before and I felt like I have been slacking more than I should that my body badly needed some beating. Since nothing good ever comes out from planning a trip, I decided rather abruptly to go on a day hike with whoever would be able to come along among my friends. It didn’t really matter if I end up going alone. Since I failed to summit Mt. Daguldol during my first try last summer, I chose to give it another shot.

                "
                img1={Mountain3}
                img2={Mountain4}
            />

        </div>
    );
};

export default Destination;