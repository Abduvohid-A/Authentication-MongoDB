import Otp from "../models/otp.models.js";

export const otpSave = async (role, email, generateOtp) => {
    try {
        const newOtp = new Otp({ email, generateOtp });
        await newOtp.save();
        return newOtp;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const findOtp = async (email) => {
    try {
        const otp = await Otp.findOne({ email });
        return otp;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteOtp = async (email) => {
    try {
        const otp = await Otp.deleteOne({ email });
        return otp;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
