const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: `${__dirname}/../.env` });
const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started listening on port: ${PORT}`);
});
