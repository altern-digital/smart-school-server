import Router from "@koa/router";
import studentRouter from "./students/router";
import feeRouter from "./fees/router";

const router = new Router();

router.use("/students", studentRouter.routes());
router.use("/fees", feeRouter.routes());

export default router;