// const { json } = require("express/lib/response");
// const { error } = require("console");
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
        data = JSON.parse(data);
        const dataStudent = [];
        for (let i = 0; i < data.length; i++) {
          dataStudent.push(
            new Student(
              data[i].id,
              data[i].first_name,
              data[i].last_name,
              data[i].email,
              data[i].gender,
              data[i].birth_date
            )
          );
        }
        cb(null, dataStudent);
        // console.log(dataStudent, "ini data");
      }
    });
  }
  static addStudent(objectStudent, cb) {
    StudentModel.showAll((err, data) => {
      if (err) {
        cb(err, null);
      } else {
        let id = data[data.length - 1].id + 1;
        console.log(id, "ini id student");
        objectStudent = new Student(
          id,
          objectStudent.first_name,
          objectStudent.last_name,
          objectStudent.email,
          objectStudent.gender,
          objectStudent.birth_date
        );
        data.push(objectStudent);
        StudentModel.saveData(data, (err, data2) => {
          if (err) {
            cb(err, null);
          } else {
            cb(null, data);
          }
        });
      }
    });
  }
  static saveData(data, cb) {
    fs.writeFile("./dataStudent.json", JSON.stringify(data, null, 2), (err) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, "student has been added");
      }
    });
  }
  static deleteData(id, cb) {
    StudentModel.showAll((err, data) => {
      if (err) {
        cb(err, null);
      } else {
        for (let i = 0; i < data.length; i++) {
          if (data[i].id === Number(id)) {
            data.splice(i, 1);
          }
        }
        StudentModel.saveData(data, (err, data2) => {
          if (err) {
            cb(err, null);
          } else {
            cb(null, data);
          }
        });
      }
    });
  }
  static editData(id, cb) {
    StudentModel.showAll((err, data) => {
      if (err) {
        cb(err, null);
      } else {
        const students = data.find((list) => list.id === Number(id));
        cb(null, students);
      }
    });
  }
  static updateStudent(objectEditStudent, cb) {
    StudentModel.showAll((err, data) => {
      if (err) {
        cb(err, null);
      } else {
        for (let i = 0; i < data.length; i++) {
          if (data[i].id === objectEditStudent.id) {
            (data[i].first_name = objectEditStudent.first_name),
              (data[i].last_name = objectEditStudent.last_name),
              (data[i].email = objectEditStudent.email),
              (data[i].gender = objectEditStudent.gender),
              (data[i].birth_date = objectEditStudent.birth_date);
          }
        }
        StudentModel.saveData(data, (err, data2) => {
          if (err) {
            cb(err, null);
          } else {
            cb(null, data2);
          }
        });
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
