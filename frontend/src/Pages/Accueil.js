import Header from "../Components/Header"
import Banner from "../Components/Banner"
import Apropos from "../Components/Apropos"
import Competences from "../Components/Competences"
import Projets from "../Components/Projets"

export default function Accueil() {
    return (
        <div>
            <Header/>
            <Banner/>
            <Apropos/>
            <Competences/>
            <Projets/>
        </div>
    )
}