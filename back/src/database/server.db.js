import mongoose from "mongoose";
const mongo_url = "mongodb+srv://war:9810235308@cluster0.38nlqzg.mongodb.net/";

async function dbConnect() {
  try {
    await mongoose.connect(mongo_url);
    console.log("Database is connected");
  } catch (error) {
    console.log("Error", error);
  }
}
export default dbConnect;
