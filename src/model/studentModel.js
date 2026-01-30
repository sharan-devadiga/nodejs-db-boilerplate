import { DataTypes } from "sequelize";
import getConnection from "../helper/dbconnection.js";

let student = null;
const initStudentmodel = async () => {
  if (student) return student;

  const sequelize = await getConnection();

  student = sequelize.define("students", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  await student.sync({ alter: true });
  return student;
};
export default initStudentmodel;
