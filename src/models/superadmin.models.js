import mongoose from "mongoose";

const { Schema, model } = mongoose;

const superAdminSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
    enum: ["Head Manager", "Service Manager", "Director", "Finance Manager"],
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

export default model("superadmin", superAdminSchema);
