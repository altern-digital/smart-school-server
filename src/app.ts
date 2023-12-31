import Koa from "koa";
import Router from "@koa/router";
import KoaLogger from "koa-logger";
import { bodyParser } from "@koa/bodyparser";

import api from "./api";
import querytypes from './middlewares/query_types';

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(KoaLogger());
app.use(querytypes.middleware);

router.use("/api", api.routes());

router.get("/", (ctx) => {
  ctx.body = "Server Active!";
});

app.use(router.routes());

export default app; 