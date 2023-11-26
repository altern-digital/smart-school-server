import { Router } from "express";

import authRouter from "./auth/auth.router";
import userRouter from "./users/user.router";
import studentsRouters from "./students/students.router";
import teachersRouters from "./teachers/teachers.router";
import classroomRouter from "./classrooms/classrooms.router";
import leaderboardsRouter from "./leaderboards/leaderboards.router";
import prisma from "../features/prisma";

const router = Router();

router.use("/auth", authRouter);
router.use("/students", studentsRouters);
router.use("/teachers", teachersRouters);
router.use("/classrooms", classroomRouter);
router.use("/leaderboards", leaderboardsRouter);
router.use("/users", userRouter);
router.get("/strike_types", async (req, res) => {
  var strikeTypes = await prisma.studentStrikeType.findMany();
  res.json(strikeTypes);
});
router.post("/complaints", async (req, res) => {
  var data = req.body;

  var complaint = await prisma.complaint.create({
    data,
  });

  res.json(complaint);
});
router.post("/feature_requests", async (req, res) => {
  var data = req.body;

  var featureRequest = await prisma.featureRequest.create({
    data,
  });

  res.json(featureRequest);
});

export default router;
