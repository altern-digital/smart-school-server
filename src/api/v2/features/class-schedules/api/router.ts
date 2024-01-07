import Router from "@koa/router";

import { ClassScheduleController } from "./controller";

const router = new Router();

router.get("/", ClassScheduleController.getMany);
router.post("/", ClassScheduleController.createOne);
router.get("/:schedule", ClassScheduleController.getOne);
router.put("/:schedule", ClassScheduleController.updateOne);
router.delete("/:schedule", ClassScheduleController.deleteOne);

export default router;