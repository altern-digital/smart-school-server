import Router from "@koa/router";
import upload from "@/services/multer";

import { FeedbackController } from "./controller";

const router = new Router();

router.get("/", FeedbackController.getMany);
router.post("/", FeedbackController.createOne);
router.get("/:feedback", FeedbackController.getOne);
router.put("/:feedback", FeedbackController.updateOne);
router.delete("/:feedback", FeedbackController.deleteOne);

export default router;