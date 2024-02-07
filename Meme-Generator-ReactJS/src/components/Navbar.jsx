
// import vector from "../images/Vector.png";
import memeFace from "../images/Troll Face.png"

const Navbar = () => {
    return(
        <header className="navbar-container">
            {/* <img src={vector} alt="" className="vector"/> */}
            <img src={memeFace} alt="an image of an Troll face meme" className="trollFace-image" />
            <h3 className="navbar-title">Meme Generator</h3>
        </header>
    );
}

export default Navbar;