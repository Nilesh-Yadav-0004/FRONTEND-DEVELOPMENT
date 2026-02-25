const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("My API is working 🚀");
});

app.get("/api/user", (req, res) => {
  res.json({
    name: "Nilesh",
    age: 20,
    goal: "Become Full Stack Developer"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});