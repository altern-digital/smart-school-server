import Router from "@koa/router";

import { CalendarEventController } from "./controller";

const router = new Router();

router.get("/", CalendarEventController.getMany);
router.post("/", CalendarEventController.createOne);
router.get("/:event", CalendarEventController.getOne);
router.put("/:event", CalendarEventController.updateOne);
router.delete("/:event", CalendarEventController.deleteOne);

export default router;