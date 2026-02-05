import { Router } from "express";
import { RESPONSE } from "../../../constants/global.js";
import { send, setErrResMsg } from "../../../helper/responseHelper.js";
import initUserModel from "../../../model/userModel.js";
import jwt from "jsonwebtoken";
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

    let model = await initUserModel();
    let user = await model.findOne({
      where: { email: email },
    });
    if (!user) {
      return send(res, RESPONSE.NOT_FOUND, "user");
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return send(res, setErrResMsg(RESPONSE.INVALID, "password"));
    } else {
      const token = jwt.sign(
        {
          id: user.id,
        },
        process.env.SECRET_KEY,
      );
      return send(res, RESPONSE.SUCCESS, { token });
    }
  } catch (error) {
    console.log("Login page", error);
    return send(res, setErrResMsg(RESPONSE.UNKNOWN_ERROR));
  }
});
