import db from '../config/db.js';

const getSalutations = () => {
    return new Promise((resolve, reject) => {
        const requete = "SELECT * FROM salutations";
        
        db.query(requete, (erreur, resultat) => {
            if (erreur) {
                console.log(`Erreur sqlState ${erreur.sqlState} : ${erreur.sqlMessage}`);
                reject(erreur);
            }
            resolve(resultat);
        });
    });
};

const getSalutationAleatoire = (code_langue) => {
    return new Promise((resolve, reject) => {
        let requete = "SELECT * FROM salutations";
        const params = [];

        if (code_langue) {
            requete += " WHERE code_langue = ?";
            params.push(code_langue);
        }

        db.query(requete, params, (erreur, resultat) => {
            if (erreur) {
                console.log(`Erreur sqlState ${erreur.sqlState} : ${erreur.sqlMessage}`);
                reject(erreur);
            }

            if (resultat.length === 0) {
                resolve(null);
            } else {
                // Sélectionner une salutation au hasard
                const salutation = resultat[Math.floor(Math.random() * resultat.length)];
                resolve(salutation);
            }
        });
    });
};

const ajouterSalutation = (code_langue, langue, message) => {
    return new Promise((resolve, reject) => {
        const requete = "INSERT INTO salutations (code_langue, langue, message) VALUES (?, ?, ?)";
        const params = [code_langue, langue, message];

        db.query(requete, params, (erreur, resultat) => {
            if (erreur) {
                console.log(`Erreur sqlState ${erreur.sqlState} : ${erreur.sqlMessage}`);
                reject(erreur);
            }
            resolve(resultat);
        });
    });
};

export default {
    getSalutations,
    getSalutationAleatoire,
    ajouterSalutation
};
