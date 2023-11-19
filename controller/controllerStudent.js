const StudentModel = require("../models/modelStudent");
const Student = require("../models/modelStudent");

// console.log(student, "dari controller");
class Controller {
  static showStudent(req, res) {
    Student.showAll((err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.render("student", { data });
      }
      // res.send(data)
    });
  }
  static formStudent(req, res) {
    res.render("addStudent.ejs");
  }
  static addStudent(req, res) {
    const objectStudent = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      birth_date: req.body.birth_date,
    };
    Student.addStudent(objectStudent, (err, data) => {
      if (err) {
        res.send("err");
      } else {
        res.redirect("/student");
      }
    });
    // console.log(objectStudent);
  }
  static deleteStudent(req, res) {
    const id = req.params.id;
    Student.deleteData(id, (err, data) => {
      if (err) {
        res.render("err");
      } else {
        res.redirect("/student");
      }
    });
  }
  static editStudent(req, res) {
    const id = req.params.id;
    StudentModel.editData(id, (err, students) => {
      if (err) {
        res.render("err");
      } else {
        res.render("editStudent");
      }
    });
  }
}
module.exports = Controller;
