import { DataTypes } from "sequelize";
import getConnection from "../helper/dbconnection.js";

let employee = null;

const initEmployeeModel = async () => {
  if (employee) return employee;

  const sequelize = await getConnection();

  employee = sequelize.define("employee", {
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
  });
  await employee.sync({ alter: true });
  return employee;
};
export default initEmployeeModel;
