import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log("Mongo db connected !!");
  } catch (error) {
    console.log("Mongodb connection error : ", error);
  }
};

export default connectDb;
