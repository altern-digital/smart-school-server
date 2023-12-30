import Router from "@koa/router";

import schoolRouter from "./school/router";
import authRouter from "./auth/router";
import userRouter from "./user/router";
import studentsRouters from "./student/router";
import teachersRouters from "./teacher/router";
import classRouter from "./class/router";
import prisma from "../../features/prisma";

const router = new Router();

router.use("/school", schoolRouter.routes());
router.use("/auth", authRouter.routes());
router.use("/students", studentsRouters.routes());
router.use("/teachers", teachersRouters.routes());
router.use("/classes", classRouter.routes());
router.use("/users", userRouter.routes());

export default router;
