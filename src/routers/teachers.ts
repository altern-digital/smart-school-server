import { Router } from 'express';

import * as teacherController from '../controllers/teacher';

const router = Router();

router.get('/:teacherId', teacherController.getTeacher);
router.get('/:teacherId/student-strikes', teacherController.getStrikes);
router.post('/:teacherId/send-student-strike', teacherController.sendStrikes);

router.put('/:teacherId', teacherController.updateTeacher);

export default router;