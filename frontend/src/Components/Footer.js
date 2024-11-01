import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";



export default function Footer() {
    return(
        <div className="footer">
            <ul className="footer-ul">
                <li><a href="mailto:ahmedalkhalaf@outlook.fr" aria-label="Envoyer un email à Ahmed"><FontAwesomeIcon icon={faEnvelope} className='footer-icon' /></a></li>
                <li><a href="https://github.com/ak92ka" target="_blank" rel="noreferrer noopener" aria-label="Visiter le profil GitHub d'Ahmed" ><FontAwesomeIcon icon={faGithub} className='footer-icon' /></a></li>
                <li><FontAwesomeIcon icon={faLinkedin} className='footer-icon' /></li>
            </ul>
            <p className='footer-text'>© 2024 Ahmed Khalaf, Tous droits réservés.</p>
        </div>
    );
}