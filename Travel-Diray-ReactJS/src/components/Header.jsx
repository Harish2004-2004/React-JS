import globe from "../images/globe-icon.png";

const Header = () => {
    return(
        <div className="header-container">
            <img src={globe} alt="an logo of an globe" className="globe-image" />
            <p className="header-title">My Travel Journal</p>
        </div>
    );
}

export default Header;