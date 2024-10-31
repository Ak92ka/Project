import logo from "../Assets/logo.png"
import { Link} from "react-router-dom";
import Hamburger from "./Hamburger";

export default function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img src={logo} alt="portfolio logo" className="logo" />
            </Link>
            <ul className="header-ul">
                <li><a href="#apropos">À propos</a></li>
                {/*<li><a href="#experiences" >Experiences</a></li>*/}
                <li><a href="#competences">Competences</a></li>
                <li><a href="#projets">Projets</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="hamburger-container">
            <Hamburger className="hamburger-menu-component"/>
            </div>
        </div>
    );
}