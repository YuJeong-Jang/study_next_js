import mongoose from "mongoose";

export const ConnectDB = async () => {
  const uri =
    "mongodb+srv://admin:admin@cluster0.i6aeb.mongodb.net/todo-kitri?retryWrites=true&w=majority&appName=Cluster0";
  // uri 내의 todo-kitri는 db명임
    await mongoose.connect(uri);
  console.log("db connect ok");
};
