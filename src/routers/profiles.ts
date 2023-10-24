import { Router } from 'express';
import * as profileController from '../controllers/profile';

const router = Router();

router.get('/:userId', profileController.getProfile);
router.put('/:userId', profileController.updateProfile);

export default router;