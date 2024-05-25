import { Router } from "express";
import { getAllSuperadmin,
    getSuperAdmin,
    putSuperAdmin,
    delSuperAdmin,
    createSuperAdmin
} from "../controllers/superadmin.controllers.js";
import adminRouter from "./admin.routes.js";
import userRouter from "./users.routes.js";
import tasksRouter from "./tasks.routes.js";

const router = Router();

router.use("/admin", adminRouter);
router.use("/users", userRouter);
router.use("/tasks", tasksRouter);

router.get("/", getAllSuperadmin);
router.get("/:id", getSuperAdmin);
router.put("/:id", putSuperAdmin);
router.delete("/:id", delSuperAdmin);
router.post("/", createSuperAdmin);

export default router;