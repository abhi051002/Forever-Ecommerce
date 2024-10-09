import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB COnnected");
  });
  await mongoose.connect(`${process.env.MANGODB_URI}/ecommerce`);
};

export default connectDB;
