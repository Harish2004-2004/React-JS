import collage from "../images/collage.png";

const Collage = () => {
    return(
    <div className="collage-container">
        <img src={collage} alt="a collage of different airbnb experiences" className="collage-images"/>
    </div>
        
    );
}

export default Collage;