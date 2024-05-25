import { Router } from "express";
import superAdmin from "./superadmin.routes.js";
import adminRouter from "./admin.routes.js";
import userRouter from "./users.routes.js";

const router = Router();

router.use("/superadmin", superAdmin);
router.use("/admin", adminRouter);
router.use("/user", userRouter);
router.use("/otp", otpRouter);

export default router;