	// module.exports = app => {
const students = require("../controllers/student.controller.js");
var router = require("express").Router();
// const multer  = require('multer');
// Create a new Student
router.post("/", students.create);

// Retrieve all Student
router.get("/", students.findAll);

// Retrieve all published Student
// router.get("/published", students.findAllPublished);

// Retrieve a single Student with id
router.get("/:id", students.findOne);

// Update a Student with id
router.put("/:id", students.update);

// Delete a Student with id
router.delete("/:id", students.delete);

// Create a new Student
router.delete("/", students.deleteAll);

// upload ảnh

module.exports = router;
// app.use('/api/students', router);
// };