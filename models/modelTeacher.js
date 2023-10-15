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

module.exports = Teacher;
