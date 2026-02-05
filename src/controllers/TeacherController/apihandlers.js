import { Router } from "express";

import addteacher from "./addteacher.js";

const route = Router();
route.use("/create", addteacher);
// route.use("/list", listemployee);
// route.use("/delete", deleteemployee);
// route.use("/edit", editemployee);

export default route;
