import Router from "@koa/router";
import * as controller from "./controller";
import upload from "../../../services/multer";

const router = new Router();

router.post("/", upload.single("file"), controller.createFeedback);

export default router;