import Router from '@koa/router';

import authRouter from "./routers/auth.router";
import userRouter from "./routers/user.router";
import studentsRouters from "./routers/students.router";
import teachersRouters from "./routers/teachers.router";
import classroomRouter from "./routers/classrooms.router";
import leaderboardsRouter from "./routers/leaderboards.router";
import prisma from "../features/prisma";

const router = new Router();

router.use("/auth", authRouter.routes());
router.use("/students", studentsRouters.routes());
router.use("/teachers", teachersRouters.routes());
router.use("/classrooms", classroomRouter.routes());
router.use("/leaderboards", leaderboardsRouter.routes());
router.use("/users", userRouter.routes());

router.get("/strike_types", async (context) => {
  var strikeTypes = await prisma.studentStrikeType.findMany();

  context.body = strikeTypes;
});

router.post("/complaints", async (context) => {
  var data = context.request.body;

  var complaint = await prisma.complaint.create({
    data,
  });

  context.body = complaint;
});
router.post("/feature_requests", async (context) => {
  var data = context.request.body;

  var featureRequest = await prisma.featureRequest.create({
    data,
  });

  context.body = featureRequest;
});

export default router;
