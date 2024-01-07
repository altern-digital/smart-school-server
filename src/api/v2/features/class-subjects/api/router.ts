import Router from "@koa/router";

import { ClassSubjectController } from "./controller";

const router = new Router();

router.get("/", ClassSubjectController.getMany);
router.post("/", ClassSubjectController.createOne);
router.get("/:subject", ClassSubjectController.getOne);
router.put("/:subject", ClassSubjectController.updateOne);
router.delete("/:subject", ClassSubjectController.deleteOne);

export default router;