import { Router } from "express";
import {
    getAllTasks,
    getTask,
    putTask,
    delTask,
    cerateTask
} from "../controllers/tasks.controllers.js";

const router = Router();

router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getTask);
router.put("/tasks/:id", putTask);
router.delete("/tasks/:id", delTask);
router.post("/tasks", cerateTask);

export default router;