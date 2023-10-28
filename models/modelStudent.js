// const { json } = require("express/lib/response");
const { error } = require("console");
const fs = require("fs");

class Student {
  constructor(id, first_name, last_name, email, gender, birth_date) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.gender = gender;
    this.birth_date = birth_date;
  }
}

class StudentModel {
  static showAll(cb) {
    fs.readFile("./dataStudent.json", "utf-8", (err, data) => {
      if (err) {
        cb(err, null);
      } else {
        const student = JSON.parse(data);
        const dataStudent = [];
        for (let i = 0; i < student.length; i++) {
          dataStudent.push(
            new Siswa(
              student[i].id,
              student[i].first_name,
              student[i].last_name,
              student[i].email,
              student[i].gender,
              student[i].birth_date
            )
          );
        }
        cb(null, data);
        console.log(data, "ini data");
      }
    });
  }
}
// const student = JSON.parse(fs.readFileSync("./dataStudent.json", "utf-8")).map(
//   (data) => {
//     return new Student(
//       data.id,
//       data.first_name,
//       data.last_name,
//       data.email,
//       data.gender,
//       data.birth_date
//     );
//   }
// );
// console.log(student, "dari model")
// console.log(student);

module.exports = StudentModel;
