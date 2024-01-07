import Router from "@koa/router";

import { StudentPointController } from "./controller";

const router = new Router();

router.get("/", StudentPointController.getMany);
router.post("/", StudentPointController.createOne);
router.get("/:point", StudentPointController.getOne);
router.put("/:point", StudentPointController.updateOne);
router.delete("/:point", StudentPointController.deleteOne);

export default router;