import { Router } from "express";

import teacherController from "../../controllers/teacher.controller";

const router = Router();

router.get('/', teacherController.get);
router.get('/:id', teacherController.getOne);
router.post('/', teacherController.create);
router.put('/:id', teacherController.update);
router.delete('/:id', teacherController.remove);
router.post('/login', teacherController.login);
router.post('/:id/send-strike', teacherController.sendStrike);

export default router;