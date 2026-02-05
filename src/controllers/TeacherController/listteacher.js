import { Router } from "express";
import { RESPONSE } from "../../constants/global.js";
import { send } from "../../helper/responseHelper.js";
import initteacherModel from "../../model/teacher.js";

const route = Router();

export default route.get("/", async (req, res) => {
  try {
    const { id } = req.query;

    const { name } = req.query;
    where = {};

    const model = await initteacherModel();

    let employees = await model.findAll({ where: {} });

    return send(res, RESPONSE.SUCCESS, employees);
  } catch (error) {
    console.log("Teacher List Page", error);

    return send(res, RESPONSE.UNKNOWN_ERROR);
  }
});
