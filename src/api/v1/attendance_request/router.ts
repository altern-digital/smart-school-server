import Router from "@koa/router";
import { AttendanceRequestController } from "./controller";
import upload from "../../../services/multer";

const router = new Router();

router.get("/", AttendanceRequestController.getAll);
router.get("/:id", AttendanceRequestController.getAttendanceRequest);
router.post("/", upload.single("file"), AttendanceRequestController.addAttendanceRequest);
router.put("/:id", AttendanceRequestController.updateAttendanceRequest);
router.delete("/:id", AttendanceRequestController.deleteAttendanceRequest);

export default router;