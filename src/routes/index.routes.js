import { Router } from "express";
import superAdmin from "./superadmin.routes.js";
import adminRouter from "./admin.routes.js";
import userRouter from "./users.routes.js";
import tasksRouter from "./tasks.routes.js";
// import otpRouter from "./otp.routes.js";

const router = Router();

router.use("/superadmin", superAdmin);
router.use("/admin", adminRouter);
router.use("/users", userRouter);
router.use("/tasks", tasksRouter);
// router.use("/otp", otpRouter);

export default router;