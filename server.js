const express = require("express");
const app = express();

app.use(express.text());

app.post("/", (req, res) => {
  console.log("Received:", req.body);

  res.send("AI says: No allergens detected");
});

app.listen(3000, () => {
  console.log("Server running");
});
