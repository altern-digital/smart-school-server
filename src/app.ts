import Koa from "koa";
import Router from "@koa/router";
import KoaLogger from "koa-logger";
import { bodyParser } from "@koa/bodyparser";

import api from "./api";
import { log } from "console";

log("Initializing app...");

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(KoaLogger());

log("Registering routes...");
router.use("/api", api.routes());

router.get("/", (ctx) => {
  ctx.body = "Server Active!";
});

app.use(router.routes());

log(router.stack.map((i) => i.methods + " " + i.path));

export default app; 