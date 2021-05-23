	// module.exports = app => {
		const classes = require("../controllers/classes.controller.js");

		var router = require("express").Router();

// Create a new class
router.post("/", classes.create);

// Retrieve all class
router.get("/", classes.findAll);

// Retrieve all published class
// router.get("/published", classes.findAllPublished);

// Retrieve a single class with id
router.get("/:id", classes.findOne);

// Update a class with id
router.put("/:id", classes.update);

// Delete a class with id
router.delete("/:id", classes.delete);

// Create a new class
router.delete("/", classes.deleteAll);

module.exports = router;
// app.use('/api/classes', router);
// };