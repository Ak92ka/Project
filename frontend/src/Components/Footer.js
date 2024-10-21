import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";



export default function Footer() {
    return(
        <div className="footer">
            <ul className="footer-ul">
                <li><FontAwesomeIcon icon={faEnvelope} className='footer-icon' /></li>
                <li><FontAwesomeIcon icon={faGithub} className='footer-icon' /></li>
                <li><FontAwesomeIcon icon={faLinkedin} className='footer-icon' /></li>
            </ul>
            <p className='footer-text'>© 2024 Ahmed Khalaf, Tous droits réservés.</p>
        </div>
    );
}