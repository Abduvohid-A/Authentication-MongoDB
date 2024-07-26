import mongoose from "mongoose";

const { Schema, model } = mongoose;

const usersSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

export default model("users", usersSchema);
