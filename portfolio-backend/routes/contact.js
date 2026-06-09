import { Router } from 'express';
import { submitContact } from '../controllers/contactController.js';
import { validateContact } from '../middleware/validate.js';

const router = Router();

router.post('/', validateContact, submitContact);

export default router;
