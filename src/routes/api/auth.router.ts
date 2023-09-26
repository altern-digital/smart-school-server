import { Router } from "express";

import { loginStudent, loginTeacher, loginAdmin } from '../../controllers/auth.controller';

const router = Router();

router.post('/auth/student/login', loginStudent);

router.post('/auth/teacher/login', loginTeacher);

router.post('/auth/admin/login', loginAdmin);

export default router;