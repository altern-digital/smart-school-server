import Router from "@koa/router";
import * as controller from "./controller";

const router = new Router();

router.post("/login", controller.loginUser);
router.get("/me", controller.authenticate, controller.userMe);
router.get("/me/profile", controller.authenticate, controller.userMeProfile);
router.put(
  "/me/change-password",
  controller.authenticate,
  controller.changePassword
);

export default router;
