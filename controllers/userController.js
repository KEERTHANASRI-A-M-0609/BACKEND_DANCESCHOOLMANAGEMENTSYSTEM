/*
const User= require("./../Models/signupModal");
const signupUser = async(req, res) => {
    try{
      const{firstname, lastname, email, phone, password} = req.body;

        const newUser = new User({
            firstname,
            lastname,
            email,
            phone,
            password,
        });
        const savedUser = await newUser.save();

        res.status(201).json({
            message: "User Regiatered Successfully",
            data: savedUser,
        });
    }

    catch(error)
    {
        res.status(500).json({
            message: "Error Registering User",
           error: error.message,
        });
    }
};


module.exports = {
    signupUser,
}
    */

/*

//LOGIN PAGE

import SignupModel from "../models/signupModel.js";
import bcrypt from "bcryptjs";

// ------------------ SIGNUP ------------------
export const signupUser = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        const existingUser = await SignupModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new SignupModel({
            name,
            email,
            phone,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({ message: "Signup successful" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// ------------------ LOGIN ------------------
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await SignupModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password" });
        }

        res.status(200).json({
            message: "Login successful",
            user: { name: user.name, email: user.email }
        });

    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};




//SIGNUP PAGE

const loginUser = async (req,res)=>{
  try{
    const {email , password}=req.body;

    //check user exists

    const user = await User.findOne({email});
    if(!user){
      return res.status(404).json({message : "User Not Found"});
    }

    //Password match (plain text)

    if(password!== user.password){
      return res.status(400).json({message : "Invalid Password"});
    }
    res.status(200).json({
      message : "Login Successfully",
      user : {
        _id:user._id,
        firstname : user.firstname,
        role:user.role,
      },
    })
    } catch(error){
      res.status(500).json({message : "Login Failed",error:error.message});
    }
};


*/

import User from "../models/User.js";
import bcrypt from "bcryptjs";


export const signup = async (req, res) => {
const { name, email, phone, password } = req.body;


const exists = await User.findOne({ email });
if (exists) return res.status(400).json({ message: "User already exists" });


const hashed = await bcrypt.hash(password, 10);


await User.create({ name, email, phone, password: hashed });
res.json({ message: "Signup successful" });
};


export const login = async (req, res) => {
const { email, password } = req.body;


const user = await User.findOne({ email });
if (!user) return res.status(400).json({ message: "Invalid email" });


const match = await bcrypt.compare(password, user.password);
if (!match) return res.status(400).json({ message: "Invalid password" });


user.lastLogin = new Date();
await user.save();


res.json({ name: user.name });
};