import otpGenerator from "otp-generator";
import { otpSave }from "./otp.service.js";
import Tasks from "../models/tasks.models.js";
import Otp from "../models/otp.models.js";


export const updateTaskPerformance = async (email) => {
    try {
        const found = await Otp.findOne({ email });

        if (!found) {
            return {
                ok: false,
                values: "",
                message: "Otp yo'q",
                status: 404
            };
        }

        const upTask = await Tasks.findOneAndUpdate({ email }, { perform: true }, { new: true });

        return {
            ok: true,
            values: upTask,
            message: "Task performance updated successfully",
            status: 200
        };
    } catch (error) {
        console.log(error);

        return {
            ok: false,
            values: "",
            message: error.message,
            status: 500
        };
    }
};


export const tasksAll = async () => {
    try {
        const Tasks = await Tasks.find();

        if (!Tasks) {
            return {
                ok: false,
                values: "",
                message: "Not Found",
                status: 404
            };
        };

        return {
            ok: true,
            values: Tasks,
            message: "",
            status: 200
        };


    } catch (error) {
        console.log(error);

        return {
            ok: false,
            values: "",
            message: error.message,
            status: 500
        };
    };
};

export const taskOne = async (id) => {
    try {
        const existTask = await Tasks.findById(id);

        if (!existTask) {
            return {
                ok: false,
                values: "",
                message: "Not Found",
                status: 404
            };
        };

        return {
            ok: true,
            values: superAdmin,
            message: "",
            status: 200
        };


    } catch (error) {
        console.log(error);

        return {
            ok: false,
            values: "",
            message: error.message,
            status: 500
        };
    };
};

export const taskUpdate = async () => {
    try {
        const superAdmin = await Tasks.find();

        if (!superAdmin) {
            return {
                ok: false,
                values: "",
                message: "Not Found",
                status: 404
            };
        };

        return {
            ok: true,
            values: superAdmin,
            message: "",
            status: 200
        };


    } catch (error) {
        console.log(error);

        return {
            ok: false,
            values: "",
            message: error.message,
            status: 500
        };
    };
};

export const taskDelete = async (id) => {
    try {
        const taskExist = await Tasks.findById(id);

        if (!taskExist) {
            return {
                ok: false,
                values: "",
                message: "Not Found",
                status: 404
            };
        };

        await Tasks.findByIdAndDelete(id);

        return {
            ok: true,
            values: "",
            message: "Successfully Deleted",
            status: 200
        };


    } catch (error) {
        console.log(error);

        return {
            ok: false,
            values: "",
            message: error.message,
            status: 500
        };
    };
};

export const taskCreate = async (newTask) => {
    try {

        const tasksexist = await Tasks.findOne(newTask);

        if (tasksexist) {
            return {
                ok: false,
                values: "",
                message: "Task already exist",
                status: 400
            };
        };

        const generater = {upperCaseAlphabets : false, specialChars : false};

        const generateOtp = otpGenerator.generate(6, generater);

        otpSave(role, email, generateOtp);
        
        const taskNew = new Tasks(newTask);

        const task = taskNew.save();

        return {
            ok: true,
            values: task,
            message: "",
            status: 201
        };


    } catch (error) {
        console.log(error);

        return {
            ok: false,
            values: "",
            message: error.message,
            status: 500
        };
    };
};