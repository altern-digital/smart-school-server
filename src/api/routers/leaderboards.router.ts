import Router from '@koa/router';

import * as leaderboardController from '../controllers/leaderboard.controller';

const router = new Router();

router.get('/:classroomName', leaderboardController.getStudentLeaderboard);

export default router;