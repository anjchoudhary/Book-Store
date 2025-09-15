import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();
const app = express()

app.use(cors({
  origin: "https://book-store-frontend-1ph5.onrender.com",  // Replace with your actual frontend URL
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));
app.use(express.json());


const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
// connect to mongoDB
try {
    mongoose.connect(URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true

    });
    console.log("Connected to Mongodb");
} catch (error) {
    console.log("Error:",error)
}

//defining routes
app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})


