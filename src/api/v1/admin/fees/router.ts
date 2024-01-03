import Router from "@koa/router";
import * as controller from "./controller";
import upload from "../../../../services/multer";

const router = new Router();

router.get("/", controller.getFees);
router.get("/:id", controller.getFee);
router.get("/:id/payments", controller.getFeePayments);

export default router;