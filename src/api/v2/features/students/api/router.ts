import Router from "@koa/router";

import { StudentController } from "./controller";

const router = new Router();

router.get("/", StudentController.getMany);
router.post("/", StudentController.createOne);
router.get("/:student", StudentController.getOne);
router.put("/:student", StudentController.updateOne);
router.delete("/:student", StudentController.deleteOne);

export default router;