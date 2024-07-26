import Joi from "joi";
import bcrypt from "bcrypt";
import {
  usersAll,
  userOne,
  userUpdate,
  userDelete,
  userCreate,
} from "../services/users.service.js";

export const getAllUsers = async (req, res) => {
  try {
    const { ok, values, status, message } = await usersAll();

    if (!ok) res.status(status).json(message);
    else res.status(status).json(values);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const { ok, values, status, message } = await userOne(id);

    if (!ok) return res.status(status).json(message);
    else return res.status(status).json(values);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error.message });
  }
};

export const putUser = async (req, res) => {
  try {
    const { id } = req.params;

    const { ok, values, status, message } = await userUpdate(id, req.body);

    if (!ok) res.status(status).json(message);
    else res.status(status).json(values);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error.message });
  }
};

export const delUser = async (req, res) => {
  try {
    const { id } = req.params;

    const { ok, values, status, message } = await userDelete(id);

    if (!ok) res.status(status).json(message);
    else res.status(status).json(message);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, role, email, password } = req.body;

    const usersSchema = Joi.object({
      name: Joi.string().min(4).required(),
      role: Joi.string().min(4).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(5).required(),
    });

    const { error, value } = usersSchema.validate({
      name,
      role,
      email,
      password,
    });

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const hashedPassword = await bcrypt.hash(value.password, 8);

    const user = {
      name: value.name,
      role: value.role,
      email: value.email,
      password: hashedPassword,
    };

    const { ok, values, status, message } = await userCreate(user);

    if (!ok) return res.status(status).json(message);
    else return res.status(status).json(values);
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: error.message });
  }
};
