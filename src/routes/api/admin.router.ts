import { Router } from "express";

import adminController from "../../controllers/admin.controller";

const router = Router();

router.get('/', adminController.get);
router.get('/:id', adminController.getOne);
router.post('/', adminController.create);
router.put('/:id', adminController.update);
router.delete('/:id', adminController.remove);
router.post('/login', adminController.login);

export default router;