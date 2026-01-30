import createStudent from "./src/controllers/studentController/createStudent.js";
import editstudent from "./src/controllers/studentController/editstudent.js";
import studentlist from "./src/controllers/studentController/studentlist.js";
import createUser from "./src/controllers/userController/createUser.js";
import deleteUser from "./src/controllers/userController/deleteUser.js";
import editUser from "./src/controllers/userController/editUser.js";
import userlist from "./src/controllers/userController/userlist.js";

const router = (app) => {
  app.use("/create", createUser);
  app.use("/edit", editUser);
  app.use("/list", userlist);
  app.use("/delete", deleteUser);

  app.use("/createstudent", createStudent);
  app.use("/liststudents", studentlist);
  app.use("/editstudents", editstudent);
};

export default router;
