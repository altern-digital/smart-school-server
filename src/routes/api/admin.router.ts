import { Router } from "express";

import * as adminController from '../../controllers/admin.controller';

const router = Router();

router.get('/admins', adminController.get)
    .post('/admins', adminController.create)
    .get('/admins/:id', adminController.getById)
    .put('/admins/:id', adminController.update)
    .delete('/admins/:id', adminController.remove);

router.post('/admin/:id/send-strike', adminController.sendTeacherStrike);

export default router;