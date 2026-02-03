import { Router } from "express";
import initStudentmodel from "../../model/studentModel.js";
import { where } from "sequelize";
import { send, setErrResMsg } from "../../helper/responseHelper.js";
import { RESPONSE } from "../../constants/global.js";

const route = Router();
export default route.delete("/", async (req, res) => {
  try {
    const { id } = req.query;

    if (!id) {
      return send(res, setErrResMsg(RESPONSE.REQUIRED, "id"));
    }
    let model = await initStudentmodel();
    model.destroy({ where: { id } });
    return send(res, RESPONSE.SUCCESS);
  } catch (error) {
    console.log("Student delete:", error);
    return send(res, RESPONSE.UNKNOWN_ERROR);
  }
});
