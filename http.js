import chalk from "chalk"
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(chalk.red.bold(`✅ Server is running at http://localhost:${PORT}`));
});





