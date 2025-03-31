import { Router } from 'express';
import { register } from '../controllers/authController';
import { login } from '../controllers/authController';

const router = Router();

// POST /api/auth/register
router.post('/register', register);

// POST /api/auth/login
 router.post('/login', login);

export default router;