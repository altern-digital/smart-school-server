import { Router } from 'express';
import * as authController from './auth.controller';

const router = Router();

router.post('/login', authController.loginUser);
router.post('/register', authController.registerUser);

export default router;