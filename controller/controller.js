const Student = require("../models/modelStudent");

// console.log(student, "dari controller");
class Controller {
    static showStudent(req, res){
        Student.showAll((err, data) => {
            if (err) {
                res.send(err)
            }else {
                res.render("student", {data})
            }
            // res.send(data)
        })
    }
}
module.exports = Controller;
