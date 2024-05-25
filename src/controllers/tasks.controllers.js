import Joi from "joi";
import bcrypt from "bcrypt";
import {
    tasksAll,
    taskOne,
    taskUpdate,
    taskDelete,
    taskCreate
} from "../services/tasks.service.js";

export const getAllTasks = async (req, res) => {
    try {

        const { ok, values, status, message } = await tasksAll();

        if (!ok) res.status(status).json(message);
        else res.status(status).json(values);

    } catch (error) {
        console.log(error);

        res.status(500).json({ message: error.message });
    };
};

export const getTask = async (req, res) => {
    try {

        const { ok, values, status, message } = await taskOne();

        if (!ok) res.status(status).json(message);
        else res.status(status).json(values);

    } catch (error) {
        console.log(error);

        res.status(500).json({ message: error.message });
    };
};

export const putTask = async (req, res) => {
    try {

        const { ok, values, status, message } = await taskUpdate();

        if (!ok) res.status(status).json(message);
        else res.status(status).json(values);

    } catch (error) {
        console.log(error);

        res.status(500).json({ message: error.message });
    };
};

export const delTask = async (req, res) => {
    try {

        const { ok, values, status, message } = await taskDelete();

        if (!ok) res.status(status).json(message);
        else res.status(status).json(values);

    } catch (error) {
        console.log(error);

        res.status(500).json({ message: error.message });
    };
};

export const cerateTask = async (req, res) => {
    try {

        const { ok, values, status, message } = await taskCreate();

        if (!ok) res.status(status).json(message);
        else res.status(status).json(values);

    } catch (error) {
        console.log(error);

        res.status(500).json({ message: error.message });
    };
};