import bannerImage from "../Assets/bonjour.webp"

export default function Banner() {
    return (
        <div className="banner">
            <img src={bannerImage}
                className="banner-gif"
                alt="Joli soleil avec des lunettes disant bonjour"
                width="480"
                srcSet={`${bannerImage} 480w, ${bannerImage} 800w`}
                sizes="(max-width: 480px) 100vw, 480px" />
            <div className="banner-text">
                <h1>Ahmed Khalaf</h1>
                <h2>Développeur Full Stack</h2>
                <p>Je conçois et je code des choses magnifiquement simples, et j'aime ce que je fais</p>
            </div>
        </div>
    );
}