import jwt from "jsonwebtoken";
import { send, setErrResMsg } from "../helper/responseHelper";
import { send, RESPONSE } from "../constants/global";

const authenticate = (req, res, next) => {
  try {
    let token = req.headers["Authorization"];

    if (!token) {
      return send(res, RESPONSE.ACCESS_DENIED);
    }
    let decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
  } catch (error) {
    console.log("Authenticate:", error);

    return send(res, setErrResMsg(RESPONSE.INVALID, "Token"));
  }
};
