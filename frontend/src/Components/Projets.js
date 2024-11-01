import client from "../sanityClient";
import React, { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import Filter from "./Filter";
import { debounce } from "lodash";
import Modal from "./Modal";

export default function Projets() {
  const builder = imageUrlBuilder(client);
  const urlFor = (source) => {
    return builder.image(source);
  };

  const [projets, setProjets] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("Tous");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjets = debounce(async () => {
      try {
        const data = await client.fetch('*[_type == "projets"]');
        setProjets(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }, 300);

    fetchProjets();
  }, []);

  const filteredProjets =
    selectedFilter === "Tous"
      ? projets
      : projets.filter(
          (projet) =>
            projet.categories && projet.categories.includes(selectedFilter)
        );

  const openModal = (projet) => {
    setSelectedProject(projet);
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  return (
    <section className="section2" id="projets">
      <h2 className="projets-h2">Projets</h2>
      <div className="projets-buttons">
        <Filter
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />
      </div>
      <div className="projets">
        {filteredProjets.map((projet) => (
          <div key={projet._id} className="projet-item">
            {projet.img && (
              <img
                src={urlFor(projet.img).url()}
                alt={projet.name}
                className="projet-image"
                width="286"
                onClick={() => openModal(projet)}
              />
            )}
            <figcaption
              onClick={() => openModal(projet)}
              className="projet-caption"
              key={projet._id}
            >
              {projet.name}
            </figcaption>
          </div>
        ))}
        <Modal isOpen={modalIsOpen} onClose={closeModal}>
          <div className="projet-modal-content">
            {selectedProject && (
              <h2 className="modal-projet-title">{selectedProject.name}</h2>
            )}
            {selectedProject?.img && (
              <img
                src={urlFor(selectedProject.img).url()}
                alt={selectedProject.name}
                className="modal-image"
                height="419"
              />
            )}
            {selectedProject?.description && (
              <p className="modal-p">{selectedProject.description}</p>
            )}
            <div className="button-container">
              {selectedProject?.lien && (
                <button
                  onClick={() => window.open(selectedProject.lien, "_blank")}
                  className="modal-button"
                >
                  Lien vers le site
                </button>
              )}
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
}
