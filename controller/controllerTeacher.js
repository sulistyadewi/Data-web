const Teacher = require("../models/modelTeacher");

class Controller {
  static showTeacher(req, res) {
    Teacher.showAll((err, data) => {
      if (err) {
        res.render("err");
      } else {
        res.render("teacher", { data });
      }
    });
  }
  static formTeacher(req, res) {
    res.render("addTeacher.ejs")
  }
  static addTeacher(req,res) {
    const objectTeacher = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender
    }
    Teacher.addTeacher(objectTeacher, (err, data) => {
      if (err) {
        res.send("err")
      }else {
        res.redirect("/teacher")
      }
    })
  }
}

module.exports = Controller;
