import Router from "@koa/router";

import { TeacherController } from "./controller";

const router = new Router();

router.get("/", TeacherController.getMany);
router.post("/", TeacherController.createOne);
router.get("/:teacher", TeacherController.getOne);
router.put("/:teacher", TeacherController.updateOne);
router.delete("/:teacher", TeacherController.deleteOne);

export default router;