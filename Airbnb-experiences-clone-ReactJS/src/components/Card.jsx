import star from "../images/star 1.png";

const Card = ({image, rating, noOfReviews, place, description, price, openSpots, location}) => {

    let badgeText;
    if(openSpots === 0){
        badgeText = "SOLD OUT";
    }else if(location === "online"){
        badgeText = "ONLINE";
    }
    return(
            <div className="card">
                    {badgeText && <div className="card--badge">{badgeText}</div>}
                    <img src={image} alt="An image of an famous swimmer" className="card--image" />
                    <div className="card--stats">
                        <img src={star} className="card--star" />
                        <span className="card-rating">{rating.toFixed(1)}</span>
                        <span className="gray card-review">({noOfReviews}) • </span>
                        <span className="gray card-place">{place}</span>
                    </div>
                    <p className="card--title">{description}</p>
                    <p className="card--price"><span className="bold">From ${price}</span> / person</p>
            </div>
    );    
}

export default Card;