const express = require("express");
const app = express();
const port = 3000;
const { student, teacher, mapel } = require("./readData");

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.set("view engine", "ejs");

// app.use(express.static("public"));

app.get("/", (req, res) => {
  // const tes = "test"
  res.render("home",{test});
});


app.get("/student", (req, res) => {
  res.render("student",{student});
  // res.render("")
});

app.get("/teacher", (req, res) => {
  res.send(teacher);
});

app.get("/mapel", (req, res) => {
  res.send(mapel);
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
