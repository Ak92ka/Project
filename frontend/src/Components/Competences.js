import ProgressBar from "./ProgressBar";
import logo from "../Assets/logo.png"

export default function Competences() {
    return (
        <section className="section-competence" id="competences">
            <h1 className="competence-h1">Mes Competences</h1>
            <div className="div-frontend">
            <h2 className="competence-h2">Front-end</h2>
            <ProgressBar percentage={95} src={logo} skill="HTML5" val="95%" />
            <ProgressBar percentage={95} src={logo} skill="CSS" val="95%" />
            <ProgressBar percentage={90} src={logo} skill="Javascript" val="90%" />
            <ProgressBar percentage={90} src={logo} skill="React" val="90%" />
            </div>
            <h2 className="competence-h2">Back-end</h2>
            <ProgressBar percentage={85} src={logo} skill="Node.js" val="85%" />
            <ProgressBar percentage={90} src={logo} skill="MongoDB" val="90%" />
        </section>
    );
}