
import locationMarker from "../images/location.png";

const Entry = ({ country, image, mapsLink, location, from, to, description }) => {
    return(
        <div className="Entry-container">
            <img src={image} alt="an image of a tourist destination"  className="place-image" />
            <div>
                <div className="info-line">
                    <img src={locationMarker} alt="an red location marker" className="location-png" />
                    <p className="place-name">{country}</p>
                    <a href={mapsLink} className="google-map-link" target="_blank">view on google maps</a>
                </div>
                <h1 className="destination">{location}</h1>
                <p className="date">{from} - {to}</p>
                <p className="description">{description}</p>
            </div>

        </div>
    );
}

export default Entry;