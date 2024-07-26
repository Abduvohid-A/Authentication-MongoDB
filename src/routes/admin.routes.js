import { Router } from "express";
import {
  getAllAdmins,
  getAdmin,
  putAdmin,
  delAdmin,
  createAdmin,
} from "../controllers/admin.controllers.js";
import userRouter from "./users.routes.js";
import tasksRouter from "./tasks.routes.js";

const router = Router();

router.use("/user", userRouter);
router.use("/tasks", tasksRouter);

router.get("/", getAllAdmins);
router.get("/:id", getAdmin);
router.put("/:id", putAdmin);
router.delete("/:id", delAdmin);
router.post("/", createAdmin);

export default router;
