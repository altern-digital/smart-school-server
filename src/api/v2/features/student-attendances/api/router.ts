import Router from "@koa/router";

import { StudentAttendanceController } from "./controller";

const router = new Router();

router.get("/", StudentAttendanceController.getMany);
router.post("/", StudentAttendanceController.createOne);
router.get("/:attendance", StudentAttendanceController.getOne);
router.put("/:attendance", StudentAttendanceController.updateOne);
router.delete("/:attendance", StudentAttendanceController.deleteOne);

export default router;