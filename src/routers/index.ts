import { Router } from 'express';

import authRouter from './auth';
import profileRouter from './profiles';
import studentRouters from './students';
import teacherRouters from './teachers';
import classroomRouter from './classrooms';

const router = Router();

router.use("/auth", authRouter);
router.use("/profiles", profileRouter);
router.use("/students", studentRouters);
router.use("/teachers", teacherRouters);
router.use("/classrooms", classroomRouter);

export default router;