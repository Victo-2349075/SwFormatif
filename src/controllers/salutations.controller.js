import salutationsModel from "../models/salutations.model.js";

// Récupérer la liste complète des salutations
const obtenirListeSalutations = async (req, res) => {
    try {
        const salutations = await salutationsModel.getSalutations();
        res.json(salutations);
    } catch (erreur) {
        console.error("Erreur lors de la récupération des salutations :", erreur);
        res.status(500).json({ message: "Erreur serveur lors de la récupération des salutations" });
    }
};

// Récupérer une salutation aléatoire (avec option de langue)
const obtenirSalutationAleatoire = async (req, res) => {
    try {
        const { langue } = req.query;
        const salutation = await salutationsModel.getSalutationAleatoire(langue);

        if (!salutation) {
            return res.status(404).json({ message: `Erreur, le code de langue ${langue} n'existe pas` });
        }

        res.json(salutation);
    } catch (erreur) {
        console.error("Erreur lors de la récupération d'une salutation aléatoire :", erreur);
        res.status(500).json({ message: "Erreur serveur lors de la récupération d'une salutation" });
    }
};

// Ajouter une nouvelle salutation
const ajouterNouvelleSalutation = async (req, res) => {
    try {
        const { code_langue, langue, message } = req.body;

        if (!code_langue || !langue || !message) {
            return res.status(400).json({ message: "Erreur, les paramètres code_langue, langue et message sont obligatoires" });
        }

        await salutationsModel.ajouterSalutation(code_langue, langue, message);
        res.json({ message: "Salutation ajoutée avec succès", salutation: message });
    } catch (erreur) {
        console.error("Erreur lors de l'ajout d'une salutation :", erreur);
        res.status(500).json({ message: "Erreur serveur lors de l'ajout d'une salutation" });
    }
};

export {
    obtenirListeSalutations,
    obtenirSalutationAleatoire,
    ajouterNouvelleSalutation
};
