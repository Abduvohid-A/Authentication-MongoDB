import Joi from "joi";
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
        const { id } = req.params;

        const { ok, values, status, message } = await taskOne(id);

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
        const { id } = req.params;

        const { ok, values, status, message } = await taskDelete(id);

        if (!ok) res.status(status).json(message);
        else res.status(status).json(message);

    } catch (error) {
        console.log(error);

        res.status(500).json({ message: error.message });
    };
};

export const cerateTask = async (req, res) => {
    try {
        const schema = Joi.object({
            name : Joi.string().min(4).required(),
            description : Joi.string().min(7).required()
        });

        const {error} = schema.validate(req.body);

        if (error) {
            return res.status(400).json( { message : error.details[0].message });
        };

        const { ok, values, status, message } = await taskCreate(req.body);

        if (!ok) res.status(status).json(message);
        else res.status(status).json(values);

    } catch (error) {
        console.log(error);

        res.status(500).json({ message: error.message });
    };
};