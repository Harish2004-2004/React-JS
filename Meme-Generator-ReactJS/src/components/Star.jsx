import starFilled from "../images/star-filled.png";
import starEmpty from "../images/star-empty.png";

const Star = ({isFilled, handleClick}) => {

    const starImage = isFilled?starFilled:starEmpty;

    return(
        <img src={starImage} alt="" onClick={handleClick}/>
    );

}

export default Star;