import Joi from "joi";
import bcrypt from "bcrypt";
import {
    adminsAll,
    adminOne,
    adminUpdate,
    adminDel,
    adminCreate
} from "../services/admin.service.js";

export const getAllTasks = async (req, res) => {
    try {

        const { ok, values, status, message } = await tasksAll();

        if (!ok) res.status(status).json(message);
        else res.status(status).json(values);
        
    } catch (error) {
        console.log(error);

        res.status(500).json({ message : error.message});
    };
};

export const getTask = async (req, res) => {
    try {

        const { ok, values, status, message } = await tasksAll();

        if (!ok) res.status(status).json(message);
        else res.status(status).json(values);
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message : error.message});
    };
};

export const putTask = async (req, res) => {
    try {

        const { ok, values, status, message } = await tasksAll();

        if (!ok) res.status(status).json(message);
        else res.status(status).json(values);
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message : error.message});
    };
};

export const delTask = async (req, res) => {
    try {

        const { ok, values, status, message } = await tasksAll();

        if (!ok) res.status(status).json(message);
        else res.status(status).json(values);
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message : error.message});
    };
};

export const cerateTask = async (req, res) => {
    try {

        const { ok, values, status, message } = await tasksAll();

        if (!ok) res.status(status).json(message);
        else res.status(status).json(values);
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message : error.message});
    };
};