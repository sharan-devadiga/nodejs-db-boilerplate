import { DataTypes } from "sequelize";
import getConnection from "../helper/dbconnection.js";

let User = null;
const initUserModel = async () => {
  if (User) return User;

  const sequelize = await getConnection();

  User = sequelize.define(
    "users",
    {
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
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    },
  );
  await User.sync({ alter: true });
  return User
};
export default initUserModel;
