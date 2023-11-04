const router = require("express").Router();
const studentController = require("../controller/controller");
const student = require("../models/modelStudent");

router.get("/", studentController.showStudent);

module.exports = router;
