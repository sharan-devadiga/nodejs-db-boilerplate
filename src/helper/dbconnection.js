import { Sequelize } from "sequelize";

let connection = null;
const getConnection = async () => {
  console.log(process.env.PGDATABASE);

  if (!connection) {
    connection = new Sequelize({
      database: process.env.PGDATABASE,
      username: process.env.PGUSERNAME,
      password: process.env.PGPASSWORD,
      host: process.env.PGHOST,
      port: 5432,
      dialect: "postgres",
      pool: {
        max: 5,
        min: 0,
        idle: 20000,
        acquire: 20000,
      },
      logging: false,
    });
    connection
      .authenticate()
      .then(() => console.log("Database Connected SuccessFully"))
      .catch((err) => console.log("Failed TO connect Database", err.message));
  }
  return connection;
};
export default getConnection;
