import { DataTypes } from "sequelize";
import getConnection from "../helper/dbconnection.js";
import initteacherModel from "./teacher.js";

let student = null;
const initStudentmodel = async () => {
  if (student) return student;

  const sequelize = await getConnection();

  student = sequelize.define("students", {
    student_id: {
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

  // let teacher = await initteacherModel();

  // student.belongsTo(teacher, {
  //   as: "teacherInfo",
  //   foreignKey: {
  //     allowNull: false,
  //     name: "teacher_id",
  //   },
  //   targetKey: "id",
  // });

  // teacher.hasMany(student, {
  //   as: "students",
  //   foreignKey: {
  //     allowNull: false,
  //     name: "teacher_id",
  //   },
  //   targetKey: "id",
  // });

  await student.sync({ alter: true });
  return student;
};
export default initStudentmodel;
