import { Router } from "express";
import { RESPONSE } from "../../../constants/global.js";
import { send, setErrResMsg } from "../../../helper/responseHelper.js";
import initUserModel from "../../../model/userModel.js";
import bcrypt from "bcrypt";

const route = Router();

export default route.post("/", async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!email) {
      return send(res, setErrResMsg(RESPONSE.REQUIRED, "email"));
    }
    if (!password) {
      return send(res, setErrResMsg(RESPONSE.REQUIRED, "password"));
    }

    const model = await initUserModel();
    const user = await model.findOne({
      where: { email: email },
    });
    if (!user) {
      return send(res, RESPONSE.NOT_FOUND, "user");
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return send(res, setErrResMsg(RESPONSE.INVALID, "password"));
    }
    return send(res, RESPONSE.SUCCESS);
  } catch (error) {
    console.log("Login page", error);
    return send(res, setErrResMsg(RESPONSE.UNKNOWN_ERROR));
  }
});
