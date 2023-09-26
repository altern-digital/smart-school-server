import { Router } from "express";

import * as studentController from '../../controllers/student.controller';

const router = Router();

router.get('/students', studentController.get)
    .post('/students', studentController.create)
    .get('/students/:id', studentController.getById)
    .put('/students/:id', studentController.update)
    .delete('/students/:id', studentController.remove);

export default router;