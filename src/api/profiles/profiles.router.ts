import { Router } from 'express';
import * as profileController from './profile.controller';

const router = Router();

router.get('/:userId', profileController.getProfile);
router.put('/:userId', profileController.updateProfile);

export default router;