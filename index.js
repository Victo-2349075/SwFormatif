import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import salutationsRouter from './src/routes/salutations.route.js';

const app = express();
const PORT = 3000;

// Middleware pour JSON
app.use(express.json());

// Middleware pour logger les requêtes dans un fichier "access.log"
const accessLogStream = fs.createWriteStream(path.join('.', 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream }));

// Route principale
app.get('/api', (req, res) => {
    res.json({ message: 'Bienvenue sur l\'API de salutations' });
});

// Routes des salutations
app.use('/api/salutations', salutationsRouter);

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
