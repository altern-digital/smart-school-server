import { Router } from 'express';

import * as teacherController from './teacher.controller';

const router = Router();

router.get('/', teacherController.getTeachers);
router.get('/:id', teacherController.getTeacher);
router.get('/:id/student-strikes', teacherController.getStrikes);
router.post('/:id/student-strikes', teacherController.sendStudentStrike);

router.put('/:id', teacherController.updateTeacher);

export default router;