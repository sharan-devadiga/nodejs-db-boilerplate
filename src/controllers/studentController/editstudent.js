import { Router } from "express";
import initStudentmodel from "../../model/studentModel.js";
import { where } from "sequelize";
import { send } from "../../helper/responseHelper.js";
import { RESPONSE } from "../../constants/global.js";

const route = Router();

export default route.put("/", async (req, res) => {
  try {
    const { id } = req.query;
    const { name, email } = req.body || {};

      
    const studentModel = await initStudentmodel();
    await studentModel.update(
      { name: name, email: email },
      { where: { id: id } },
    );
    return send(res, RESPONSE.SUCCESS);
  } catch (error) {
    console.log("Edit Students:", error);
    return send(res, RESPONSE.UNKNOWN_ERROR);
  }
});
