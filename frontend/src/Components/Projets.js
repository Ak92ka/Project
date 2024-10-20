import client from '../sanityClient';
import React, { useEffect, useState } from 'react';
import imageUrlBuilder from '@sanity/image-url';

export default function Projets() {
    const builder = imageUrlBuilder(client);
    const urlFor = (source) => {
        return builder.image(source);
      };
    const [projets, setProjets] = useState([]);

    useEffect(() => {
        const fetchProjets = async () => {
            try {
                const data = await client.fetch('*[_type == "projets"]');
                setProjets(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjets();
    }, []);
    return (
        <section className="section2" id="projets">
            <h1 className="projets-h1">Projets</h1>
            <div className="projets-buttons">
                <button>Tous</button>
                <button>HTML</button>
                <button>CSS</button>
                <button>Javascript</button>
                <button>React</button>
                <button>Backend</button>
            </div>
            <div className="projets">
         {projets.map(projet => (
            <div key={projet._id} className="projet-item">
            {projet.img && 
            <img
             src={urlFor(projet.img).url()} 
             alt={projet.name} 
             className="projet-image" />},
            <figcaption className="projet-caption" key={projet._id}>{projet.name}</figcaption>
            </div>
         ))}
            </div>
        </section>
    );
}