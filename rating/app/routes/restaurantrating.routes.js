module.exports = app => {
    const restaurantrating = require("../controllers/restaurantrating.controller");
  
    var router = require("express").Router();
  
    // Create a new restaurantrating
    router.post("/", restaurantrating.create);
  
    // Retrieve all restaurantrating
    router.get("/", restaurantrating.findAll);
  
    // // // Retrieve all published restaurantrating
    // router.get("/published", restaurantrating.findAllPublished);
  
    // // // Retrieve a single restaurantrating with id
    router.get("/:id", restaurantrating.findOne);
  
    // // // Update a restaurantrating with id
    router.put("/:id", restaurantrating.update);

    router.patch("/:id",restaurantrating.update);
  
    // // // Delete a restaurantrating with id
    router.delete("/:id", restaurantrating.delete);
  
    // // // Create a new restaurantrating
    // router.delete("/", restaurantrating.deleteAll);
  
    app.use('/api/restaurantrating', router);
  };