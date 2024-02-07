import logo from "../images/airbnb 1.png";

const Navbar = () => {
    return(
        <header>
            <nav className="navbar-container">
                <img src={logo} alt="a logo of airbnb"/>
            </nav>
        </header>
    );
}

export default Navbar;