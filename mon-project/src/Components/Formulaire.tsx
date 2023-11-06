import React from 'react';
import './Formulaire.css'; 

const Formulaire: React.FC = () => {
    return (
        <div className="container">
            <header>
                <h1 id="titre">Formulaire de CV</h1>
            </header>
            <main>
                <section className="info-personnel">
                    <h2>Informations personnelles</h2>
                    <div className="form-element">
                        <label htmlFor="nom">Nom :</label>
                        <input type="text" name="nom" id="nom" placeholder="Quelle est votre nom"/>
                    </div>
                    <div className="form-element">
                        <label htmlFor="prenom">Prénom :</label>
                        <input type="text" name="prenom" id="prenom" placeholder="Quelle est votre prénom"/>
                    </div>
                    <div className="form-element">
                        <label htmlFor="prenom">Adresse :</label>
                        <input type="text" name="prenom" id="prenom" placeholder="Quelle est votre adresse"/>
                    </div>
                    <div className="form-element">
                        <label htmlFor="prenom">Email :</label>
                        <input type="text" name="prenom" id="prenom" placeholder="Quelle est votre Email"/>
                    </div>
                    
                </section>

                <section className="education">
                    <h2>Éducation et parcours</h2>
                    <div className="form-element">
                    <label htmlFor="diplome">Diplôme :</label>
                <select id="diplome" name="diplome" required>
                    <option value="">Sélectionnez un diplôme</option>
                    <option value="Baccalauréat">Baccalauréat</option>
                    <option value="Licence">Licence</option>
                    <option value="Master">Master</option>
                    <option value="Doctorat">Doctorat</option>
                    <option value="DUT">DUT (Diplôme universitaire de technologie)</option>
                    <option value="BTS">BTS (Brevet de technicien supérieur)</option>
                    <option value="CAP">CAP (Certificat d'aptitude professionnelle)</option></select>
                    </div>
                    <div className="form-element">
                        <label htmlFor="etablissement">Nom de l'établissement :</label>
                        <input type="text" name="etablissement" id="etablissement" placeholder="Quel est le nom de l'établissement"/>
                    </div>
                    
                </section>

                <section className="experience">
                    <h2>Expérience professionnelle</h2>
                    <div className="form-element">
                        <label htmlFor="poste">Titre du poste :</label>
                        <input type="text" name="poste" id="poste" placeholder="Quel est le titre du poste"/>
                    </div>
                    <div className="form-element">
                        <label htmlFor="entreprise">Nom de l'entreprise :</label>
                        <input type="text" name="entreprise" id="entreprise" placeholder="Quel est le nom de l'entreprise"/>
                    </div>
                    {/* Ajoutez d'autres champs ici */}
                </section>
            </main>
            <footer>
                <button className="submit-butt`on" type="submit">
                    Soumettre
                </button>
            </footer>
        </div>
    );
};

export default Formulaire;

