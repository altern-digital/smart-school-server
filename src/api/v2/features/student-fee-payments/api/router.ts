import Router from "@koa/router";
import upload from "@/services/multer";

import { StudentFeePaymentController } from "./controller";

const router = new Router();

router.get("/", StudentFeePaymentController.getMany);
router.post("/", StudentFeePaymentController.createOne);
router.get("/:payment", StudentFeePaymentController.getOne);
router.put("/:payment", StudentFeePaymentController.updateOne);
router.delete("/:payment", StudentFeePaymentController.deleteOne);

export default router;