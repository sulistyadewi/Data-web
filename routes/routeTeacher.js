const router = require("express").Router();
const teacherController = require("../controller/controllerTeacher");
const teacher = require("../models/modelTeacher");

router.get("/", teacherController.showTeacher);
router.get("/add", teacherController.formTeacher);
router.post("/add", teacherController.addTeacher);

module.exports = router;
