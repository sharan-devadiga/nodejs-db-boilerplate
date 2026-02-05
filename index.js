import express from "express";
import getConnection from "./src/helper/dbconnection.js";
import env from "dotenv";
import router from "./routes.js";
env.config({ quiet: true });
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
getConnection();
router(app);
app.listen(PORT, () => {
  console.log("Server Running on Port", PORT);
});
