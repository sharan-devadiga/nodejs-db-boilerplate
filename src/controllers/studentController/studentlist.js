import { RESPONSE } from "../../constants/global.js";
import { send, setErrResMsg } from "../../helper/responseHelper.js";
import initStudentmodel from "../../model/studentModel.js";
import { Router } from "express";

const route = Router();

export default route.get("/", async (req, res) => {
  try {
    const studentModel = await initStudentmodel();
    let students = await studentModel.findAll({
      where: {},
    });
    return send(res, RESPONSE.SUCCESS, students);
  } catch (error) {
    console.log("List User", error);
    return send(res, setErrResMsg(RESPONSE.UNKNOWN_ERROR));
  }
});
