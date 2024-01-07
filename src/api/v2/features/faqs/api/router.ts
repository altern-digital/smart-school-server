import Router from "@koa/router";

import { FaqController } from "./controller";

const router = new Router();

router.get("/", FaqController.getMany);
router.post("/", FaqController.createOne);
router.get("/:faq", FaqController.getOne);
router.put("/:faq", FaqController.updateOne);
router.delete("/:faq", FaqController.deleteOne);

export default router;