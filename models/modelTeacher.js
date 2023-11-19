const fs = require("fs");

class Teacher {
  constructor(id, first_name, last_name, email, gender) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.gender = gender;
  }
}

class TeacherModel {
  static showAll(cb) {
    fs.readFile("./dataTeacher.json", "utf-8", (err, data) => {
      if (err) {
        cb(err, null);
      } else {
        data = JSON.parse(data);
        const dataTeacher = [];
        for (let i = 0; i < data.length; i++) {
          dataTeacher.push(
            new Teacher(
              data[i].id,
              data[i].first_name,
              data[i].last_name,
              data[i].email,
              data[i].gender
            )
          );
        }
        cb(null, dataTeacher);
      }
    });
  }
  static addTeacher(objectTeacher, cb) {
    TeacherModel.showAll((err, data) => {
      if (err) {
        cb(err, null);
      } else {
        console.log(data, "ini data");
        let id = 0;
        if (!data.length) {
          id = 1;
        } else {
          id = data[data.length - 1].id + 1;
        }
        console.log(id, "ini id teacher");
        objectTeacher = new Teacher(
          id,
          objectTeacher.first_name,
          objectTeacher.last_name,
          objectTeacher.email,
          objectTeacher.gender
        );
        data.push(objectTeacher);
        TeacherModel.saveData(data, (err, data2) => {
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
    fs.writeFile("./dataTeacher.json", JSON.stringify(data, null, 2), (err) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, "Teacher has been added");
      }
    });
  }
  static deleteData(id, cb) {
    TeacherModel.showAll((err, data) => {
      if (err) {
        cb(err, null);
      } else {
        for (let i = 0; i < data.length; i++) {
          if (data[i].id === Number(id)) {
            data.plice(i, 1);
          }
        }
        TeacherModel.saveData(data, (err, data2) => {
          if (err) {
            cb(err, null);
          } else {
            cb(null, data);
          }
        });
      }
    });
  }
}

// const teacher = JSON.parse(fs.readFileSync("./dataTeacher.json", "utf-8")).map(
//   (data) => {
//     return new Teacher(
//       data.id,
//       data.first_name,
//       data.last_name,
//       data.email,
//       data.gender
//     );
//   }
// );
// console.log(teacher);

module.exports = TeacherModel;
