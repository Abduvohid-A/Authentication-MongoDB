import Joi from "joi";
import bcrypt from "bcrypt";
import {
    superadminAll,
    superadminOne,
    superadminUpdate,
    superadminDelete,
    superadminCreate
} from "../services/superadmin.service.js";

export const getAllSuperadmin = async (req, res) => {
    try {

        const { ok, values, status, message } = await superadminAll();

        if (!ok) res.status(status).json(message);
        else res.status(status).json(values);
        
    } catch (error) {
        console.log(error);

        res.status(500).json({ message : error.message});
    };
};

export const getSuperAdmin = async (req, res) => {
    try {

        const { ok, values, status, message } = await superadminOne();

        if (!ok) res.status(status).json(message);
        else res.status(status).json(values);
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message : error.message});
    };
};

export const putSuperAdmin = async (req, res) => {
    try {

        const { ok, values, status, message } = await superadminUpdate();

        if (!ok) res.status(status).json(message);
        else res.status(status).json(values);
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message : error.message});
    };
};

export const delSuperAdmin = async (req, res) => {
    try {

        const { ok, values, status, message } = await superadminDelete();

        if (!ok) res.status(status).json(message);
        else res.status(status).json(values);
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message : error.message});
    };
};

export const createSuperAdmin = async (req, res) => {
    try {

        const { ok, values, status, message } = await superadminCreate();

        if (!ok) res.status(status).json(message);
        else res.status(status).json(values);
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message : error.message});
    };
};