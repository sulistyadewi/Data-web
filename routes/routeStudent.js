const router = require('express').Router();
const student = require("../models/modelStudent")

router.get("/", (req, res) => {
  res.render("student", {student});
  // res.send(student)
});


module.exports = router;
