const db = require("../models");
const Restaurantrating = db.restaurantrating;


exports.create = (req, res) => {
    // Validate request
    if (!req.body.OrderId) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  // console.log(req.body);
    // Create a restaurantrating
      const restaurantrating = new Restaurantrating(
        {
            "RestaurantId": Math.ceil(Math.random() * 100),
            "CustomerId": Math.ceil(Math.random() * 277),
            "Datetime": new Date(),
            "OrderId": req.body.OrderId,
            "Rating":req.body.Rating,
            "Review":req.body.Review
          }
        );
   
 
  
    // Save restaurantrating in the database
    restaurantrating
      .save(restaurantrating)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the restaurantrating."
        });
      });
  };


  exports.findAll = (req, res) => {
    // console.log(req.query.Name);
    const title = req.query.RestaurantId;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    Restaurantrating.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving ratings."
        });
      });
  };

  exports.findOne = (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
  console.log(id);
    Restaurantrating.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Restaurantrating with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Restaurantrating with id=" + id });
      });
  };




  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).json({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Restaurantrating.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).json({
            message: `Cannot update Restaurantrating with id=${id}. Maybe Restaurantrating was not found!`
          });
        } else res.json({ message: "Restaurantrating was updated successfully." });
      })
      .catch(err => {
        res.status(500).json({
          message: "Error updating Restaurantrating with id=" + id
        });
      });
  };


  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Restaurantrating.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Restaurantrating with id=${id}. Maybe Restaurantrating was not found!`
          });
        } else {
          res.send({
            message: "Restaurantrating was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Restaurantrating with id=" + id
        });
      });
  };
