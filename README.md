# nodejs-db-boilerplate
A Node.js boilerplate project with a clean folder structure and preconfigured database connection using Sequelize ORM. Designed for building scalable backend APIs with easy database integration.


Step 1 Create index.js
import express from "express";

const app = express();
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server Running on Port",PORT);
})

step 2 Edit Package.json 
{
  "name": "node-js-project",
  "version": "1.0.0",
  "main": "index.js",
  "type":"module",     <-- Add This 
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "dotenv": "^17.2.3",
    "express": "^5.2.1",
    "nodemon": "^3.1.11"
  }
}

step 3 Folder Structure (image)

step 4 Database Connection   ( npm i pg)
import { Sequelize } from "sequelize";

const connection = null;
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

Setp 5 .env 
PGUSERNAME=postgress
PGPASSWORD=1947
PGHOST=localhost
PGDATABASE=test
