import { Router } from "express";

import studentRouter from './student.router';
import teacherRouter from './teacher.router';
import adminRouter from './admin.router';

const router = Router();

router.use("/students", studentRouter);
router.use("/teachers", teacherRouter);
router.use("/admins", adminRouter);

router.get('/', (req, res) => {
  res.send({
    "status": "ok"
  });
});

export default router;