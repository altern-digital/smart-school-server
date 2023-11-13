import { Router } from 'express';

import * as userController from './user.controller';

const router = Router();

router.get('/', userController.getUsers);
router.get('/:userId', userController.getUser);
router.get('/:userId/profile', userController.getProfile);

export default router;