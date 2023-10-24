import { Router } from 'express';
import * as classroomController from '../controllers/classroom';

const router = Router();

router.get("/", classroomController.getClassrooms);

export default router;