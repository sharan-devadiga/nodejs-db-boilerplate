import { Router } from "express";
import { send, setErrResMsg } from "../../helper/responseHelper.js";
import { RESPONSE } from "../../constants/global.js";
import initStudentmodel from "../../model/studentModel.js";

const route = Router();

export default route.post("/", async (req, res) => {
  console.log("Create Student");
  try {
    const { name, email } = req.body || {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email) {
      return send(res, setErrResMsg(RESPONSE.REQUIRED, "email"));
    }

    if (!email.match(emailRegex)) {
      return send(res, setErrResMsg(RESPONSE.FORMAT, "email"));
    }

    const studentModel = await initStudentmodel();
    await studentModel.create({
      name,
      email,
    });
    return send(res, RESPONSE.SUCCESS);
  } catch (error) {
    console.log(error);
    return send(res, RESPONSE.UNKNOWN_ERROR);
  }
});
