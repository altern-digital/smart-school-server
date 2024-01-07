import Router from "@koa/router";

import { StudentFeeController } from "./controller";

const router = new Router();

router.get("/", StudentFeeController.getMany);
router.post("/", StudentFeeController.createOne);
router.get("/:fee", StudentFeeController.getOne);
router.put("/:fee", StudentFeeController.updateOne);
router.delete("/:fee", StudentFeeController.deleteOne);

export default router;