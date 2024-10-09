import dotenv from 'dotenv';
dotenv.config()

import mongoose from "mongoose";


export const connectDB = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    //console.log('MongoDB URI:', process.env.MONGO_URI);

    console.log("DB connected successfully !");
  } catch (error) {
    console.log(error);
  }
};
