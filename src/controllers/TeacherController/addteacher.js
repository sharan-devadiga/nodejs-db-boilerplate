import { Router } from "express";
import { send, setErrResMsg } from "../../helper/responseHelper.js";
import { RESPONSE } from "../../constants/global.js";
import initteacherModel from "../../model/teacher.js";

const route = Router();

export default route.post("/", async (req, res) => {
  try {
    const { name, email, phone, address, student_id } = req.body;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!name) {
      return send(res, setErrResMsg(RESPONSE.REQUIRED, "name"));
    }

    if (!email.match(emailRegex)) {
      return send(res, setErrResMsg(RESPONSE.FORMAT, "Email"));
    }
    if (!email) {
      return send(res, setErrResMsg(RESPONSE.REQUIRED, "Email"));
    }

    if (!phone) {
      return send(res, setErrResMsg(RESPONSE.REQUIRED, "Phone"));
    }

    const model = await initteacherModel();

    await model.create({
      name: name,
      email: email,
      phone: phone,
      address: address,
      student_id: student_id,
    });
    return send(res, RESPONSE.SUCCESS);
  } catch (error) {
    console.log("Add Teacher:", error);

    return send(res, RESPONSE.UNKNOWN_ERROR);
  }
});
