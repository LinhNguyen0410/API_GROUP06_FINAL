const db = require("../models");
const Student = db.students;
const multer  = require('multer')


// Create and Save a new Student
exports.create = (req, res) => {
    // Validate request
    if (!req.body.idcard || !req.body.name || !req.body.birthday || !req.body.class || !req.body.address
      || !req.body.specialized || !req.body.gender 
      || !req.body.mailcontact || !req.body.IDnum || !req.body.numberphone) {
        res.status(400).send({ message: "Vui lòng không bỏ trống bất kỳ trường nào." });
        return;
      }
    
    // Create a Student
    const student = new Student({
        idcard: req.body.idcard,
        name: req.body.name,
        birthday: req.body.birthday,
        class: req.body.class,
        address: req.body.address,
        specialized:req.body.specialized,
        gender:req.body.gender,
        mailcontact:req.body.mailcontact,
        numberphone:req.body.numberphone,
        IDnum:req.body.IDnum,
    });

    // Save Student in the database
    student
    .save(student)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the Student."
        });
    });
};

// Retrieve all Students from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

    Student.find(condition)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving student."
        });
    });
};

// Find a single Student with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Student.findById(id)
        .then(data => {
        if (!data)
            res.status(404).send({ message: "Not found student with id " + id });
        else res.send(data);
        })
        .catch(err => {
        res
            .status(500)
            .send({ message: "Error retrieving student with id=" + id });
        });
};

// Update a Student by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      Student.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update student with id=${id}. Maybe student was not found!`
            });
          } else res.send({ message: "student was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating student with id=" + id
          });
        });
};

// Delete a Student with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

  Student.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete student with id=${id}. Maybe student was not found!`
        });
      } else {
        res.send({
          message: "student was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete student with id=" + id
      });
    });
};

// Delete all Students from the database.
exports.deleteAll = (req, res) => {
    Student.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} student were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all student."
      });
    });
};
