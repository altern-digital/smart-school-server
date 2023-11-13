import { Router } from 'express';

import * as teacherController from './teacher.controller';

const router = Router();

router.get('/', teacherController.getTeachers);
router.get('/:teacherId', teacherController.getTeacher);
router.get('/:teacherId/student-strikes', teacherController.getStrikes);
router.post('/:teacherId/student-strikes', teacherController.sendStudentStrike);

router.put('/:teacherId', teacherController.updateTeacher);

export default router;