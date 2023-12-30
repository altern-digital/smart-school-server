import Router from "@koa/router";
import * as controller from "./controller";

const router = new Router();

router.get("/", controller.getclasss);
router.get("/:id", controller.getclass);
router.get("/:id/schedules", controller.getclassSchedules);

export default router;