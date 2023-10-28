import { Router } from 'express';

import authRouter from './auth/auth.router';
import profilesRouter from './profiles/profiles.router';
import studentsRouters from './students/students.router';
import teachersRouters from './teachers/teachers.router';
import classroomRouter from './classrooms/classrooms.router';
import leaderboardsRouter from './leaderboards/leaderboards.router';
import postsRouter from './posts/posts.router';

const router = Router();

router.use("/auth", authRouter);
router.use("/profiles", profilesRouter);
router.use("/students", studentsRouters);
router.use("/teachers", teachersRouters);
router.use("/classrooms", classroomRouter);
router.use("/leaderboards", leaderboardsRouter);
router.use("/posts", postsRouter);

export default router;