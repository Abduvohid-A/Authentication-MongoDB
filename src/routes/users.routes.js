import { Router } from "express";
import {
  getAllUsers,
  getUser,
  putUser,
  delUser,
  createUser,
} from "../controllers/users.controllers.js";
import tasksRouter from "./tasks.routes.js";

const router = Router();

router.use("/tasks", tasksRouter);

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.put("/:id", putUser);
router.delete("/:id", delUser);
router.post("/", createUser);

export default router;
