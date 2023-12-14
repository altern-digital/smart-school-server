import Router from '@koa/router';
import * as authController from "../controllers/auth.controller";

const router = new Router();

router.post("/login", authController.loginUser);
router.post("/register", authController.registerUser);
router.get("/me", authController.authenticate, authController.userMe);
router.post(
  "/me/change_password",
  authController.authenticate,
  authController.changePassword
);

export default router;
