import express from "express";
import cors from "cors";
import noteRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

import dotenv from "dotenv";

dotenv.config();

const app=express();
const PORT = process.env.PORT || 5001; 

//Middleware
app.use(cors(
  {origin: "http://localhost:5173"},
));
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", noteRoutes);

connectDB().then(() => {
app.listen(5001, () =>{
  console.log("Server started at port:",PORT);
});
});