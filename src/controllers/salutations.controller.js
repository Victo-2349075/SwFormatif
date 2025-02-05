import { salutations, ajouterSalutation } from '../models/salutations.model.js';

// Récupérer la liste complète des salutations
export function obtenirListeSalutations(req, res) {
    res.json(salutations);
}

// Récupérer une salutation aléatoire (avec option de langue)
export function obtenirSalutationAleatoire(req, res) {
    const { langue } = req.query;
    let liste = salutations;

    if (langue) {
        liste = salutations.filter(s => s.code_langue === langue);
        if (liste.length === 0) {
            return res.status(404).json({ message: `Erreur, le code de langue ${langue} n'existe pas` });
        }
    }

    const salutation = liste[Math.floor(Math.random() * liste.length)];
    res.json(salutation);
}

// Ajouter une nouvelle salutation
export function ajouterNouvelleSalutation(req, res) {
    const { code_langue, langue, message } = req.body;

    if (!code_langue || !langue || !message) {
        return res.status(400).json({ message: "Erreur, les paramètres code_langue, langue et message sont obligatoires" });
    }

    const nouvelleSalutation = { code_langue, langue, message };
    ajouterSalutation(nouvelleSalutation);
    res.json({ message: "Salutation ajoutée", salutation: message });
}
