const express = require("express");
const cors = require("cors");
// var expect  = require('chai').expect;
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};
// expect(app.use(cors(corsOptions))).to.equal('Hello World');
// done();
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("../app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to RestaurantApp application." });
});

// const ratingroutes = require('./routes/restaurantrating.routes');
// ratingroutes(app);
require("../app/routes/restaurantrating.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});