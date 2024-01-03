import Router from "@koa/router";

import adminRouter from "./admin/router";
import schoolRouter from "./school/router";
import authRouter from "./auth/router";
import userRouter from "./user/router";
import studentsRouters from "./student/router";
import teachersRouters from "./teacher/router";
import classRouter from "./class/router";
import feeRouter from "./fee/router";
import appFeedback from "./feedback/router";

import attendanceRequestRouter from "./attendance_request/router";

const router = new Router();

router.use("/admin", adminRouter.routes());
router.use("/school", schoolRouter.routes());
router.use("/auth", authRouter.routes());
router.use("/students", studentsRouters.routes());
router.use("/teachers", teachersRouters.routes());
router.use("/classes", classRouter.routes());
router.use("/users", userRouter.routes());
router.use("/fees", feeRouter.routes());
router.use("/feedbacks", appFeedback.routes());
router.use("/attendance_requests", attendanceRequestRouter.routes());

export default router;
