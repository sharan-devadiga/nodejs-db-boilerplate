import { DataTypes } from "sequelize";
import getConnection from "../helper/dbconnection.js";
import initStudentmodel from "./studentModel.js";

let teacher = null;

const initteacherModel = async () => {
  if (teacher) return teacher;

  const sequelize = await getConnection();

  teacher = sequelize.define("teacher", {
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
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    file: {
      type: DataTypes.STRING,
    },
  });

  let student_model = await initStudentmodel();

  student_model.hasOne(teacher, {
    as: "studentModel",
    onDelete: "cascade",
    foreignKey: {
      allowNull: false,
      name: "student_id",
    },
    targetKey: "student_id",
  });
  await teacher.sync({ alter: true });
  return teacher;
};
export default initteacherModel;
