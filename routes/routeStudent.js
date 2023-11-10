const router = require("express").Router();
const studentController = require("../controller/controllerStudent");
const student = require("../models/modelStudent");

router.get("/", studentController.showStudent);
router.get("/add", studentController.formStudent)
router.post("/add", studentController.addStudent)

module.exports = router;
