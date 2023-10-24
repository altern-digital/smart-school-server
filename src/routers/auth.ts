import { Router } from 'express';
import * as authController from '../controllers/auth';

const router = Router();

router.post('/login', authController.loginUser);
router.post('/register', authController.registerUser);
router.post('/me', authController.authenticate, authController.userMe);

export default router;