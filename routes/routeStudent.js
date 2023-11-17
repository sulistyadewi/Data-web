const router = require("express").Router();
const studentController = require("../controller/controllerStudent")
const student = require("../models/modelStudent");

router.get("/", studentController.showStudent);
router.get("/add", studentController.formStudent)
router.post("/add", studentController.addStudent)
router.get("/:id/delete", studentController.deleteStudent)
router.get("/:id/edit", studentController)

module.exports = router;
