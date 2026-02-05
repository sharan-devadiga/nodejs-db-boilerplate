import addemployee from "./addemployee.js";
import { Router } from "express";
import listemployee from "./listemployee.js";
import deleteemployee from "./deleteemployee.js";
import editemployee from "./editemployee.js";

const route = Router();
route.use("/create", addemployee);
route.use("/list", listemployee);
route.use("/delete", deleteemployee);
route.use("/edit", editemployee);

export default route;
