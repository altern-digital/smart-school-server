import Router from "@koa/router";

import * as controller from "./controller";

const router = new Router();

router.get("/", controller.getTeachers);
router.get("/:id", controller.getTeacher);
router.get("/:id/schedules", controller.getTeacherSchedules);
router.get("/:id/student-strikes", controller.getStrikes);
router.post("/:id/student-strikes", controller.sendStudentStrike);

router.put("/:id", controller.updateTeacher);

export default router;