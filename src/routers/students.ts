import { Router } from 'express';

import * as studentController from '../controllers/student';

const router = Router();

router.get('/', studentController.getStudents);
router.get('/:studentId', studentController.getStudent);
router.get('/:studentId/strikes', studentController.getStrikes);

router.put('/:studentId', studentController.updateStudent);

export default router;