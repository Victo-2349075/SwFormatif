import express from 'express';
import { obtenirListeSalutations, obtenirSalutationAleatoire, ajouterNouvelleSalutation } from '../controllers/salutations.controller.js';

const router = express.Router();

router.get('/liste', obtenirListeSalutations);
router.get('/', obtenirSalutationAleatoire);
router.post('/', ajouterNouvelleSalutation);

export default router;
