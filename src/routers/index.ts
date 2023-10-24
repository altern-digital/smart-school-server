import { Router } from 'express';

import authRouter from './auth';
import profilesRouter from './profiles';
import studentsRouters from './students';
import teachersRouters from './teachers';
import classroomRouter from './classrooms';
import leaderboardsRouter from './leaderboards';

const router = Router();

router.use("/auth", authRouter);
router.use("/profiles", profilesRouter);
router.use("/students", studentsRouters);
router.use("/teachers", teachersRouters);
router.use("/classrooms", classroomRouter);
router.use("/leaderboards", leaderboardsRouter);

export default router;