module.exports = app => {
    const restaurantreview = require("../controllers/restaurantreview.controller");
  
    var router = require("express").Router();
  
    // Create a new restaurantreview
    router.post("/", restaurantreview.create);
  
    // Retrieve all restaurantreview
    router.get("/", restaurantreview.findAll);
  
    // // // Retrieve all published restaurantreview
    // router.get("/published", restaurantreview.findAllPublished);
  
    // // // Retrieve a single restaurantreview with id
    router.get("/:id", restaurantreview.findOne);
  
    // // // Update a restaurantreview with id
    router.put("/:id", restaurantreview.update);

    router.patch("/:id", restaurantreview.update);
  
    // // // Delete a restaurantreview with id
    router.delete("/:id", restaurantreview.delete);
  
    // // // Create a new restaurantreview
    // router.delete("/", restaurantreview.deleteAll);
  
    app.use('/api/restaurantreview', router);
  };