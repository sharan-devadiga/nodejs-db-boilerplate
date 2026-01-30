import { Router } from "express";
import { send, setErrResMsg } from "../../helper/responseHelper.js";
import { RESPONSE } from "../../constants/global.js";
import initUserModel from "../../model/userModel.js";

const router = Router();
export default router.put("/", async (req, res) => {
  try {
    const { id } = req.query;
    const { name, email } = req.body || {};

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

    if (!email) {
      return send(res, setErrResMsg(RESPONSE.REQUIRED, "email"));
    }

    if (!emailRegex.test(email)) {
      return send(res, setErrResMsg(RESPONSE.FORMAT, "email"));
    }
    // if (!password) {
    //   return send(res, setErrResMsg(RESPONSE.REQUIRED, "password"));
    // }
    // if (!passwordRegex.test(password)) {
    //   return send(res, setErrResMsg(RESPONSE.FORMAT, "email"));
    // }
    const model = await initUserModel();
    await model.update({ name: name, email: email }, { where: { id: id } });
    // return res.send({code:200,message:"Success"})
    return send(res, RESPONSE.SUCCESS);
  } catch (error) {
    console.log(error);

    return send(res, RESPONSE.UNKNOWN_ERROR);
  }
});
