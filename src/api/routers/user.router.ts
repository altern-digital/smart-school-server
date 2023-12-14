import Router from '@koa/router';

import * as userController from '../controllers/user.controller';

const router = new Router();

router.get('/', userController.getUsers);
router.get('/:userId', userController.getUser);
router.get('/:userId/profile', userController.getProfile);

export default router;