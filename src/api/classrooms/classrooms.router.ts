import { Router } from 'express';
import * as classroomController from './classroom.controller';

const router = Router();

router.get("/", classroomController.getClassrooms);

export default router;