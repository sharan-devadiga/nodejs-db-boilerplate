# nodejs-db-boilerplate
A Node.js boilerplate project with a clean folder structure and preconfigured database connection using Sequelize ORM. Designed for building scalable backend APIs with easy database integration.


Step 1 Create index.js

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

step 3 Folder Structure 

step 4 Database Connection   ( npm i pg)

Setp 5 .env 
PGUSERNAME=..
PGPASSWORD=..
PGHOST=..
PGDATABASE=..
