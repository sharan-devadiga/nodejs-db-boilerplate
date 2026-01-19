import express from "express";
import getConnection from "./src/helper/dbconnection.js";
import env from "dotenv";
env.config();
const app = express();
const PORT = 3000;
getConnection();

app.listen(PORT, () => {
  console.log("Server Running on Port", PORT);
});
