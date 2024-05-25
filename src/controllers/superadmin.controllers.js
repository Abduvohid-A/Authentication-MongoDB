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
        const { id } = req.params;

        const { ok, values, status, message } = await superadminOne(id);

        if (!ok) res.status(status).json(message);
        else res.status(status).json(values);
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message : error.message});
    };
};

export const putSuperAdmin = async (req, res) => {
    try {
        const { id } = req.params;

        const { ok, values, status, message } = await superadminUpdate(id, req.body);

        if (!ok) res.status(status).json(message);
        else res.status(status).json(values);
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message : error.message});
    };
};

export const delSuperAdmin = async (req, res) => {
    try {
        const { id } = req.params;

        const { ok, values, status, message } = await superadminDelete(id);

        if (!ok) res.status(status).json(message);
        else res.status(status).json(message);
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message : error.message});
    };
};

export const createSuperAdmin = async (req, res) => {
    try {

        const superSchema = Joi.object({
            name : Joi.string().min(4).required(),
            role : Joi.string().min(4).required(),
            email : Joi.string().email().required(),
            password : Joi.string().min(5).required(),
        });

        const { error, value } = superSchema.validate(req.body);

        if (error) {
            return res.status(400).json({ message : error.details[0].message });
        };

        const hashedPassword = await bcrypt.hash(value.password, 8);

        const superAdmin = {name : value.name, role : value.role, email : value.email, password : hashedPassword};

        const { ok, values, status, message } = await superadminCreate(superAdmin);

        if (!ok) res.status(status).json(message);
        else res.status(status).json(values);
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message : error.message});
    };
};