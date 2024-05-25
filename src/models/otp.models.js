import mongoose from "mongoose";

const { Schema, model } = mongoose;

const otpSchema = new Schema({
    role : {
        type : String,
        require : true
    },
	email: {
		type: String,
		require: true,
		unique: true
	},
	otp: {
		type: String,
		require: true,
	},
	createAt: {
		type: Date,
		default: Date.now,
	}
});

export default model("otp", otpSchema);