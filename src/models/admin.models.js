import mongoose from "mongoose";

const { Schema, model } = mongoose;

const adminSchema = Schema({
    name : {
        type : String,
        require : true
    },
    role : {
        type : String,
        require : true,
        enum : [ 'Project Manager', 'Devops Manager', 'Main Accountant', 'Sineor Developer']
    },
    email : {
        type : String,
        require : true,
        unique: true
    },
    password : {
        type : String,
        require : true
    }
});

export default model("admin", adminSchema);