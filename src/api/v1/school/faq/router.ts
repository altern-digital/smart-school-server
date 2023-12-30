import Router from "@koa/router";
import * as controller from "./controller";

const router = new Router();

router.get("/", controller.getFaqs);

export default router;