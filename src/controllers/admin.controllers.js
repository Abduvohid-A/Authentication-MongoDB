import Joi from "joi";
import bcrypt from "bcrypt";
import {
  adminsAll,
  adminOne,
  adminUpdate,
  adminDel,
  adminCreate,
} from "../services/admin.service.js";

export const getAllAdmins = async (req, res) => {
  try {
    const { ok, values, status, message } = await adminsAll();

    if (!ok) res.status(status).json(message);
    else res.status(status).json(values);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error.message });
  }
};

export const getAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const { ok, values, status, message } = await adminOne(id);

    if (!ok) res.status(status).json(message);
    else res.status(status).json(values);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error.message });
  }
};

export const putAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const { ok, values, status, message } = await adminUpdate(id, req.body);

    if (!ok) res.status(status).json(message);
    else res.status(status).json(values);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error.message });
  }
};

export const delAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const { ok, values, status, message } = await adminDel(id);

    if (!ok) res.status(status).json(message);
    else res.status(status).json(message);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error.message });
  }
};

export const createAdmin = async (req, res) => {
  try {
    const schema = Joi.object({
      name: Joi.string().min(4).required(),
      role: Joi.string().min(5).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(10).required(),
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const hashedPassword = await bcrypt.hash(value.password, 8);

    const admin = {
      name: value.name,
      role: value.role,
      email: value.email,
      password: hashedPassword,
    };

    const { ok, values, status, message } = await adminCreate(admin);

    if (!ok) res.status(status).json(message);
    else res.status(status).json(values);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error.message });
  }
};
