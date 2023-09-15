// app.js
const express = require("express");
const app = express();
const port = 3000;
// Choose the port you prefer // Set EJS as the view engine
app.set("view engine", "ejs"); // Define a route that renders an EJS template
app.get("/", (req, res) => {
  // You can pass data to your EJS template here
  const data = { pageTitle: "My EJS App" };
  res.render("index", data); // Render
  // the 'index.ejs' template with the provided data
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
