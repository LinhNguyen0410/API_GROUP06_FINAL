const db = require("../models");
const Class = db.classes;

// Create and Save a new class
exports.create = (req, res) => {
    // Validate request
    if (!req.body.IDClass || !req.body.className || !req.body.career ) {
        res.status(400).send({ message: "Vui lòng không bỏ trống bất kỳ trường nào." });
        return;
      }
    
    // Create a class
    const classs = new Class({
        IDClass: req.body.IDClass,
        className: req.body.className,
         career: req.body.career,
    });

    // Save class in the database
    classs
    .save(classs)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the class."
        });
    });
};

// Retrieve all classs from the database.
exports.findAll = (req, res) => {
    const className = req.query.className;
    var condition = className ? { className: { $regex: new RegExp(className), $options: "i" } } : {};

    Class.find(condition)
        .then(data => {
        res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving class."
        });
    });
};

// Find a single class with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Class.findById(id)
        .then(data => {
        if (!data)
            res.status(404).send({ message: "Not found class with id " + id });
        else res.send(data);
        })
        .catch(err => {
        res
            .status(500)
            .send({ message: "Error retrieving class with id=" + id });
        });
};

// Update a class by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      Class.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update class with id=${id}. Maybe class was not found!`
            });
          } else res.send({ message: "class was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating class with id=" + id
          });
        });
};

// Delete a class with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

  Class.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete class with id=${id}. Maybe class was not found!`
        });
      } else {
        res.send({
          message: "class was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete class with id=" + id
      });
    });
};

// Delete all classs from the database.
exports.deleteAll = (req, res) => {
    Class.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} class were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all class."
      });
    });
};

// Find all published classs
// exports.findAllPublished = (req, res) => {
//     class.find({ published: true })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving class."
//       });
//     });
// };