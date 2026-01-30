import { Router } from "express";
import initStudentmodel from "../../model/studentModel.js";
import { RESPONSE } from "../../constants/global.js";
import { send } from "../../helper/responseHelper.js";

const route = Router();

export default route.delete("/", async (req, res) => {
  try {
    const { id } = req.query;

    const studentModel = await initStudentmodel();
    await studentModel.destroy({
      where: { id },
    });
    return send(res, RESPONSE.SUCCESS);
  } catch (error) {
    console.log("Delete Users:", error);
    return send(res, RESPONSE.UNKNOWN_ERROR);
  }
});
