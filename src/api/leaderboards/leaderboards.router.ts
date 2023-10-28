import { Router } from 'express';

import * as leaderboardController from './leaderboard.controller';

const router = Router();

router.get('/:classroomName', leaderboardController.getStudentLeaderboard);

export default router;