import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

//POST REGISTER
export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // validation message
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // check if user exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({
        success: true,
        message: "User already registered, please login",
      });
    }

    // Register user
    const hashedPassword = await hashPassword(password);
    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};

//POST LOGIN
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(401).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

//test controller
export const testcontroller = (req, res) => {
  console.log("protected Route");
};
