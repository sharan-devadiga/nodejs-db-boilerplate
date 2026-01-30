import { Router } from "express";
import initUserModel from "../../model/userModel.js";
import { RESPONSE } from "../../constants/global.js";
import { send, setErrResMsg } from "../../helper/responseHelper.js";

const router = Router();
export default router.get("/", async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) {
      return send(res, setErrResMsg(RESPONSE.REQUIRED, "ID"));
    }
    const userModel = await initUserModel();
    let users = await userModel.findAll({
      where: { id: id || {} },
    });
    return send(res, RESPONSE.SUCCESS, users);
  } catch (error) {
    console.log(error);

    return send(res, RESPONSE.UNKNOWN_ERROR);
  }
});
