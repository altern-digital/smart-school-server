import { Router } from "express";

import studentRouter from './student.router';

const router = Router();

router.use("/students", studentRouter);

router.get('/', (req, res) => {
  res.send({
    "status": "ok"
  });
});

export default router;