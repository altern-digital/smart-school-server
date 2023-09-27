import { Router } from "express";

import studentController from "../../controllers/student.controller";

const router = Router();

router.get('/', studentController.get);
router.get('/:id', studentController.getOne);
router.post('/', studentController.create);
router.put('/:id', studentController.update);
router.delete('/:id', studentController.remove);
router.post('/login', studentController.login);

export default router;