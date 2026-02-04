import createStudent from "./src/controllers/studentController/createStudent.js";
import deletestudent from "./src/controllers/studentController/deletestudent.js";
import editstudent from "./src/controllers/studentController/editstudent.js";
import studentlist from "./src/controllers/studentController/studentlist.js";
import login from "./src/controllers/userController/auth/login.js";
import createUser from "./src/controllers/userController/createUser.js";
import deleteUser from "./src/controllers/userController/deleteUser.js";
import editUser from "./src/controllers/userController/editUser.js";
import userlist from "./src/controllers/userController/userlist.js";
import EmployeeController from "./src/controllers/EmployeeController/apihandlers.js";

const router = (app) => {
  app.use("/login", login);
  app.use("/create", createUser);
  app.use("/edit", editUser);
  app.use("/list", userlist);
  app.use("/delete", deleteUser);

  app.use("/createstudent", createStudent);
  app.use("/liststudents", studentlist);
  app.use("/editstudents", editstudent);
  app.use("/deletestudent", deletestudent);

  app.use("/employee", EmployeeController);
};

export default router;
