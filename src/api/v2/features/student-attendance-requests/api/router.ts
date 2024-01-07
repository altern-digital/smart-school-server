import Router from "@koa/router";
import upload from "@/services/multer";

import { StudentAttendanceRequestController } from "./controller";

const router = new Router();

router.get("/", StudentAttendanceRequestController.getMany);
router.post("/", StudentAttendanceRequestController.createOne);
router.get("/:attendance_request", StudentAttendanceRequestController.getOne);
router.put("/:attendance_request", StudentAttendanceRequestController.updateOne);
router.delete("/:attendance_request", StudentAttendanceRequestController.deleteOne);

export default router;