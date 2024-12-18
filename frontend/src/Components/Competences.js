import ProgressBar from "./ProgressBar";
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNode } from "@fortawesome/free-brands-svg-icons";
import mongodb from "../Assets/mongodb.svg"

export default function Competences() {
    return (
        <section className="section-competence" id="competences">
            <h2 className="competence-h2">Mes Competences</h2>
            <div className="div-frontend">
            <h3 className="competence-h3">Front-end</h3>
            <ProgressBar percentage={95} icon={faHtml5} skill="HTML5" val="95%" />
            <ProgressBar percentage={95} className="bar-blue" icon={faCss3Alt} skill="CSS" val="95%" />
            <ProgressBar percentage={90} className="bar-yellow" icon={faJsSquare} skill="Javascript" val="90%" />
            <ProgressBar percentage={90} className="bar-dark-blue" icon={faReact} skill="React" val="90%" />
            </div>
            <h3 className="competence-h3">Back-end</h3>
            <ProgressBar percentage={85} className="bar-dark-green" icon={faNode} skill="Node.js" val="85%" />
            <ProgressBar percentage={90} className="bar-green" icon={mongodb} skill="MongoDB" val="90%" />
        </section>
    );
}