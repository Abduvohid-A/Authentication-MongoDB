import Joi from "joi";
import { findOtp, deleteOtp } from "../services/otp.service.js";
import { updateTaskPerformance } from "../services/tasks.service.js";

export const createOtp = async (req, res) => {
  try {
    const { email, generateOtp } = req.body;

    const schema = Joi.object({
      email: Joi.string().email().required(),
      generateOtp: Joi.string().length(6).required(),
    });

    const { error, value } = schema.validate({ email, generateOtp });

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const otpData = await findOtp(email);

    if (otpData.otp !== generateOtp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    await deleteOtp(email);

    const task = await updateTaskPerformance(email);

    return res.status(200).json(task);
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: error.message });
  }
};
