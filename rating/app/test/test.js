const assert = require('chai').assert;
const restaurantrating = require("../controllers/restaurantrating.controller");
const expect = require('chai').expect;
const should = require('chai').should;
const winston = require('winston');
const logConfiguration = {
  'transports': [
      new winston.transports.Console()
  ]
};
const logger = winston.createLogger(logConfiguration);
var chai = require('chai')
  , chaiHttp = require('chai-http');
  chai.use(chaiHttp);


  chai.request('http://localhost:8080')
  .get('/')
  describe('API ', () => {
    it('API GET', (done) => {
      chai.request('http://localhost:8080/api')
        .get('/restaurantrating')
        .end((err, res) => {
          if(err){
          logger.log({
            // Message to be logged
                message: err,
            
            // Level of the message logging
                level: 'error'
            }); 
          }
            logger.log({
              // Message to be logged
                  message: res,
              
              // Level of the message logging
                  level: 'info'
              });         // res.should.have.status(200);
          // res.should.to.be.json;
          // res.body.should.be.a('array');
          // res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe('API POST ', () => {
    it('API POST', (done) => {
      chai.request('http://localhost:8080/api')
        .post('/restaurantrating').send(
          {
            "RestaurantId": "",
           "CustomerId": "",
           "Datetime": "",
           "OrderId": "4567",
           "Rating":"2.7",
           "Review":"Nice"
   })
        .end((err, res) => {
          if(err){
            logger.log({
              // Message to be logged
                  message: err,
              
              // Level of the message logging
                  level: 'error'
              }); 
            }
                 // res.should.have.status(200);
            // res.should.to.be.json;
          done();
        });
    });
  });

  describe('API PUT ', () => {
    it('API PUT', (done) => {
      chai.request('http://localhost:8080/api')
        .put('/restaurantrating').set('API', 'rating').send({
          "RestaurantId": "",
         "CustomerId": "",
         "Datetime": "",
         "OrderId": "67",
         "Rating":"4.7",
         "Review":"Nice Good Food!!!!"
 }
          )
        .end((err, res) => {
          if(err){
            logger.log({
              // Message to be logged
                  message: err,
              
              // Level of the message logging
                  level: 'error'
              }); 
            }
                 // res.should.have.status(200);
            // res.should.to.be.json;
          done();
        });
    });
  });

describe('restaurantrating', function() {
    it('Restaurant rating is a function', function() {
      assert.isFunction(restaurantrating.create,'Restaurant rating is a function');
    });
});

describe('restaurantratingassert', function() {
    it('Restaurant rating is Defined or Not?', function() {
      assert.isDefined(restaurantrating.create,'Restaurant rating is a defined','It is Defined');
    });
});



describe('restaurantratingexpect', function() {
  it('Restaurant Expect', function() {
    expect(restaurantrating.findAll).to.not.equal(42);
  });
});




describe('restaurantratingexpect', function() {
  it('Restaurant Expect', function() {

  expect(restaurantrating.update).to.be.ok;
  });
});








