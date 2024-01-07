import Router from "@koa/router";
import upload from "@/services/multer";

import { UploadController } from "./controller";

const router = new Router();

router.post("/file", upload.single("file"), UploadController.createOne);

export default router;