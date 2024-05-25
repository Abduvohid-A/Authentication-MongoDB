import { Router } from "express";
import {
    getAllTasks,
    getTask,
    putTask,
    delTask,
    cerateTask
} from "../controllers/tasks.controllers.js";

const router = Router();

router.get("/", getAllTasks);
router.get("/:id", getTask);
router.put("/:id", putTask);
router.delete("/:id", delTask);
router.post("/", cerateTask);

export default router;