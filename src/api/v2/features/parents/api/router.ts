import Router from "@koa/router";

import { ParentController } from "./controller";

const router = new Router();

router.get("/", ParentController.getMany);
router.post("/", ParentController.createOne);
router.get("/:parent", ParentController.getOne);
router.put("/:parent", ParentController.updateOne);
router.delete("/:parent", ParentController.deleteOne);

export default router;