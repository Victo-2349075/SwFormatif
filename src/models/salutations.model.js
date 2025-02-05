export const salutations = [
    { code_langue: "fr", langue: "Français", message: "Bonjour le monde" },
    { code_langue: "fr", langue: "Français", message: "Bon matin" },
    { code_langue: "en", langue: "Anglais", message: "Hello world" },
    { code_langue: "es", langue: "Espagnol", message: "Hola Mundo" },
    { code_langue: "de", langue: "Allemand", message: "Hallo Welt" }
];

export function ajouterSalutation(salutation) {
    salutations.push(salutation);
}
