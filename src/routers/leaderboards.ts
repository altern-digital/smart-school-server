import { Router } from 'express';

import * as leaderboardController from '../controllers/leaderboard';

const router = Router();

router.get('/:classroomName', leaderboardController.getStudentLeaderboard);

export default router;