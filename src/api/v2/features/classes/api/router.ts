import Router from "@koa/router";

import { ClassController } from "./controller";

const router = new Router();

router.get("/", ClassController.getMany);
router.post("/", ClassController.createOne);
router.get("/:class", ClassController.getOne);
router.put("/:class", ClassController.updateOne);
router.delete("/:class", ClassController.deleteOne);

export default router;