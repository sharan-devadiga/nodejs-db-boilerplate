import { Router } from "express";
import initEmployeeModel from "../../model/employeeModel.js";
import { send, setErrResMsg } from "../../helper/responseHelper.js";
import { RESPONSE } from "../../constants/global.js";

const route = Router();

export default route.put("/", async (req, res) => {
  try {
    let updates = {};
    const { id } = req.query;
    const { name, email, phone, address } = req.body || {};

    if (!id) {
      return send(res, setErrResMsg(RESPONSE.REQUIRED, "id"));
    }

    if (name && name !== "") {
      updates.name = name;
    }
    if (email && email !== "") {
      updates.email = email;
    }
    if (phone && phone !== "") {
      updates.phone = phone;
    }
    if (address && address !== "") {
      updates.address = address;
    }

    let model = await initEmployeeModel();

    await model.update(updates, { where: { id: id } });
    return send(res, RESPONSE.SUCCESS);
  } catch (error) {
    console.log("Edit Employee:", error);
    return send(res, RESPONSE.UNKNOWN_ERROR);
  }
});
