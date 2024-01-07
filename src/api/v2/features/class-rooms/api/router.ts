import Router from "@koa/router";

import { ClassRoomController } from "./controller";

const router = new Router();

router.get("/", ClassRoomController.getMany);
router.post("/", ClassRoomController.createOne);
router.get("/:room", ClassRoomController.getOne);
router.put("/:room", ClassRoomController.updateOne);
router.delete("/:room", ClassRoomController.deleteOne);

export default router;