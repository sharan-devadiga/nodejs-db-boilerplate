import addemployee from "./addemployee.js";
import { Router } from "express";

const route = Router();
route.use("/create", addemployee);

export default route;
