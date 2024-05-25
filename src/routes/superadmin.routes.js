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
router.use("/user", userRouter);
router.use("/tasks", tasksRouter);

router.get("/superadmin", getAllSuperadmin);
router.get("/superadmin/:id", getSuperAdmin);
router.put("/superadmin/:id", putSuperAdmin);
router.delete("/superadmin/:id", delSuperAdmin);
router.post("/superadmin", createSuperAdmin);

export default router;