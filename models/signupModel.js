/*
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname : String,
    email: String,
    phone: Number,
    password: String,
});

module.exports = mongoose.model("user", userSchema);

*/



/*


import mongoose from "mongoose";

const signupSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true }
});

const SignupModel = mongoose.model("User", signupSchema);

export default SignupModel;

*/