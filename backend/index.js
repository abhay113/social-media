const express = require("express");

app = express();
const PORT = 9900;

app.get("/", (req, res) => {
  res.send("hello ");
});
app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});
