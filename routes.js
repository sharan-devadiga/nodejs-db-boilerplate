import createUser from "./src/controllers/userController/createUser.js";

const router = (app) => {
  app.use("/create", createUser);
};
export default router;
