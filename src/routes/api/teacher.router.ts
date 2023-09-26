import { Router } from "express";

import * as teacherController from '../../controllers/teacher.controller';

const router = Router();

router.get('/teachers', teacherController.get)
    .post('/teachers', teacherController.create)
    .get('/teachers/:id', teacherController.getById)
    .put('/teachers/:id', teacherController.update)
    .delete('/teachers/:id', teacherController.remove);

export default router;