require("dotenv").config();
const express = require("express");
const formidable = require("express-formidable");
// const mongoose = require("mongoose")
// const cors = require("cors");

const app = express();

// app.use(cors());
app.use(formidable());

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });

// déclaration des routes
const studentRoute = require("./routes/student");
app.use(studentRoute);
const conventionRoute = require("./routes/convention");
app.use(conventionRoute);

// test route
app.get("/", (req, res) => {
  res.json({ message: "le serveur fonctionne" });
});
// si la route n'existe pas
app.all("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.listen(3004, () => {
  console.log("Server started!");
});
