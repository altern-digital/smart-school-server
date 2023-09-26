import { Router } from "express";

import authRouter from './auth.router';
import studentRouter from './student.router';
import teacherRouter from './teacher.router';
import adminRouter from './admin.router';

const router = Router();

router.use(authRouter);
router.use(studentRouter);
router.use(teacherRouter);
router.use(adminRouter);

router.get('/', (req, res) => {
  res.send('ok');
});

export default router;