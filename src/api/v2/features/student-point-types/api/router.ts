import Router from "@koa/router";

import { StudentPointTypeController } from "./controller";

const router = new Router();

router.get("/", StudentPointTypeController.getMany);
router.post("/", StudentPointTypeController.createOne);
router.get("/:point_type", StudentPointTypeController.getOne);
router.put("/:point_type", StudentPointTypeController.updateOne);
router.delete("/:point_type", StudentPointTypeController.deleteOne);

export default router;