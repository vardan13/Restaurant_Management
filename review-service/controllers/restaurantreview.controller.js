const db = require("../models");
const Restaurantreview = db.restaurantreview;
const winston = require('winston');
const logConfiguration = {
  'transports': [
      new winston.transports.Console()
  ]
};
const logger = winston.createLogger(logConfiguration);


exports.create = (req, res) => {
    // Validate request
    if (!req.body.Name) {
      // res.status(400).send({ message: "Content can not be empty!" });
      // if(err){
        logger.log({
          // Message to be logged
              message: 'Please fill fields',
          
          // Level of the message logging
              level: 'error'
          }); 
        // }
           // res.should.have.status(200);
      return;
    }
  // console.log(req.body);
    // Create a restaurantreview
    const restaurantreview = new Restaurantreview(
    {
        "Name": req.body.Name,
        "Phone": req.body.Phone,
        "Location": {"lat":req.body.Location.lat,"lon":req.body.Location.lon},
        "Address": {"City":req.body.Address.City,"state":req.body.Address.state},
        "Cuisine":req.body.Cuisine,
        "Budget":{"Rupees":req.body.Budget.Rupees},
        "Menus":{"items":{"id":req.body.Menus.items.id,"name":req.body.Menus.items.name}}
      }
      
      ,
      { timestamps: true });
  
    // Save restaurantreview in the database
    restaurantreview
      .save(restaurantreview)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        // res.status(500).send({
        //   message:
        //     err.message || "Some error occurred while creating the restaurantreview."
        // });
        // if(err){
          logger.log({
            // Message to be logged
                message: err,
            
            // Level of the message logging
                level: 'error while posting restaurant'
            }); 
          // }
      });
  };


  exports.findAll = (req, res) => {
    // console.log(req.query.Name);
    const title = req.query.Name;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    Restaurantreview.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        // if(err){
          logger.log({
            // Message to be logged
                message: err,
            
            // Level of the message logging
                level: 'error'
            }); 
          // }
      });
  };

  exports.findOne = (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
  console.log(id);
    Restaurantreview.findById(id)
      .then(data => {
        if (!data)
        logger.log({
          // Message to be logged
              message: 'No data available',
          
          // Level of the message logging
              level: 'info'
          });
          // res.status(404).send({ message: "Not found RestaurantReview with id " + id });
          
        else res.send(data);
      })
      .catch(err => {
        logger.log({
          // Message to be logged
              message: err,
          
          // Level of the message logging
              level: 'info'
          });
  

        })
      }


  exports.update = (req, res) => {
    if (!req.body) {
      return logger.error("Hello, Winston logger,Request cannot be empty!");
    }
  
    const id = req.params.id;
  
    Restaurantreview.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          
            logger.error(`Cannot update Restaurantreview with id=${id}. Maybe Restaurantreview was not found!`)
         
        } else logger.error("Restaurantreview was updated successfully.");
      })
      .catch(err => {
       logger.error("Error updating Restaurantreview with id=" + id)
        
      });
  };


  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Restaurantreview.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Restaurantreview with id=${id}. Maybe Restaurantreview was not found!`
          });
        } else {
          res.send({
            message: "Restaurantreview was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Restaurantreview with id=" + id
        });
      });
  };
