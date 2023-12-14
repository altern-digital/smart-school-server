import Router from '@koa/router';

import * as studentController from '../controllers/student.controller';

const router = new Router();

router.get('/', studentController.getStudents);
router.get('/:studentId', studentController.getStudent);
router.get('/:studentId/strikes', studentController.getStrikes);

router.put('/:studentId', studentController.updateStudent);

export default router;