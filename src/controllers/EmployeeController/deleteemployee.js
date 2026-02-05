import { Router } from "express";
import { send, setErrResMsg } from "../../helper/responseHelper.js";
import { RESPONSE } from "../../constants/global.js";
import initEmployeeModel from "../../model/employeeModel.js";

const route = Router();
export default route.delete("/", async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return send(res, setErrResMsg(RESPONSE.REQUIRED, "id"));
    }

    const model = await initEmployeeModel();
    model.destroy({ where: { id: id } });

    return send(res, RESPONSE.SUCCESS);
  } catch (error) {
    console.log("Delete Empolyee", error);
    return send(res, RESPONSE.UNKNOWN_ERROR);
  }
});
