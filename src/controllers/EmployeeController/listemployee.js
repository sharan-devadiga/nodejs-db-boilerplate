import { Router } from "express";
import initEmployeeModel from "../../model/employeeModel.js";
import { RESPONSE } from "../../constants/global.js";
import { send } from "../../helper/responseHelper.js";

const route = Router();

export default route.get("/", async (req, res) => {
  try {
    const { id } = req.query;

    const { name } = req.query;
    where = {};

    const model = await initEmployeeModel();

    let employees = await model.findAll({ where: {} });

    return send(res, RESPONSE.SUCCESS, employees);
  } catch (error) {
    console.log("Employee List Page", error);

    return send(res, RESPONSE.UNKNOWN_ERROR);
  }
});
