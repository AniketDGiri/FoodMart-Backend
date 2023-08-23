const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: `${__dirname}/../.env` });

//Creating a DB Connection using Mongoose

const password = encodeURIComponent(`${process.env.DATABASE_PASSWORD}`);

const DB_URL = `${process.env.DATABASE_URL}`.replace("<PASSWORD>", password);

mongoose
  .connect(DB_URL, {
    user: process.env.DATABASE_USERNAME,
    pass: process.env.DATABASE_PASSWORD,
  })
  .then(() => {
    console.log("Connection to the database successfully completed");
  });

const app = express();

// console.log(process.env);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
