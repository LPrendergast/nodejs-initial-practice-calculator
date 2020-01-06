const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", (req, res) => {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);
  const bmi = weight / (height * height);

  res.send("Your BMI is " + bmi);
});

app.post("/", (req, res) => {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const result = num1 + num2;

  res.send("Result of calculation is " + result);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
