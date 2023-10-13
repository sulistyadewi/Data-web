const { json } = require("express/lib/response");
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

const student = JSON.parse(fs.readFileSync("./dataStudent.json", "utf-8")).map(
  (data) => {
    return new Student(
      data.id,
      data.first_name,
      data.last_name,
      data.email,
      data.gender,
      data.birth_date
    );
  }
);
// console.log(student);

class Teacher {
  constructor(id, first_name, last_name, email, gender) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.gender = gender;
  }
}

const teacher = JSON.parse(fs.readFileSync("./dataTeacher.json", "utf-8")).map(
  (data) => {
    return new Teacher(
      data.id,
      data.first_name,
      data.last_name,
      data.email,
      data.gender
    );
  }
);
// console.log(teacher);

class Mapel {
  constructor(id, mapel) {
    this.id = id;
    this.mapel = mapel;
  }
}

const mapel = JSON.parse(fs.readFileSync("./dataMapel.json")).map((data) => {
  return new Mapel(data.id, data.mapel);
});

// console.log(mapel);

module.exports = { student, teacher, mapel };
