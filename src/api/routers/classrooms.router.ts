import Router from '@koa/router';
import * as classroomController from '../controllers/classroom.controller';

const router = new Router();

router.get("/", classroomController.getClassrooms);

export default router;