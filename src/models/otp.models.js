import mongoose from "mongoose";

const { Schema, model } = mongoose;

const otpSchema = new Schema({
	email: {
		type: String,
		require: true,
		unique: true
	},
	otp: {
		type: String,
		require: true,
		length : 6
	},
	createAt: {
		type: Date,
		default: Date.now,
	}
});

export default model("otp", otpSchema);