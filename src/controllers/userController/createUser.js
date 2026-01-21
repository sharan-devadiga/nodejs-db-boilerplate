import { RESPONSE } from "../../constants/global.js";
import { send, setErrResMsg } from "../../helper/responseHelper.js";
import initUserModel from "../../model/userModel.js";
import { Router } from "express";
import bcrypt from "bcrypt";

const router = Router();
export default router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body || {};

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    if (!email) {
      return send(res, setErrResMsg(RESPONSE.REQUIRED, "email"));
    }
    if (!emailRegex.test(email)) {
      return send(res, setErrResMsg(RESPONSE.FORMAT, "email"));
    }
    if (!password) {
      return send(res, setErrResMsg(RESPONSE.REQUIRED, "Password"));
    }
    if (!passwordRegex.test(password)) {
      return send(res, setErrResMsg(RESPONSE.FORMAT, "passowrd"));
    }
    const model = await initUserModel();
    const encrypted_password = await bcrypt.hash(password, 10);
    const user = await model.create({
      name,
      email,
      password: encrypted_password,
    });

    return send(res, RESPONSE.SUCCESS, {
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.log("CreateUser Controller :", error);
    return send(res, RESPONSE.UNKNOWN_ERROR);
  }
});
