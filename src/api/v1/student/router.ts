import Router from "@koa/router";

import * as controller from "./controller";

const router = new Router();

router.get("/", controller.getStudents);
router.get("/:studentId", controller.getStudent);
router.get("/:studentId/attendances", controller.getAttendance);
router.get("/:studentId/attendances/:id", controller.getAttendanceById);
router.get("/:studentId/fees", controller.getFees);
router.get("/:studentId/fees/:id", controller.getFeeById);
router.get("/:studentId/strikes", controller.getStrikes);

router.put("/:studentId", controller.updateStudent);

export default router;