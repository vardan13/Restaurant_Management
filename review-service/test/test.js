const assert = require('chai').assert;
const restaurantreview = require("../controllers/restaurantreview.controller");
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
        .get('/restaurantorder')
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
        .post('/restaurantorder').send({
          "Items": {"itemid":"12","Qty":"7"},
                 "Amount":"Rs.590",
                 "Paidvia":"Paytm"
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

describe('restaurantreview', function() {
    it('Restaurant review is a function', function() {
      assert.isFunction(restaurantreview.create,'Restaurant review is a function');
    });
});

describe('restaurantreviewassert', function() {
    it('Restaurant review is Defined or Not?', function() {
      assert.isDefined(restaurantreview.create,'Restaurant review is a defined','It is Defined');
    });
});

describe('restaurantreview', function() {
    it('Restaurant review is Empty or Not?', function() {
      assert.isNotEmpty(restaurantreview.findAll,'Restaurant review is a defined','It is Defined');
      should.fail("Function is not empty");
    });
});

describe('restaurantreviewexpect', function() {
  it('Restaurant Expect', function() {
    expect(restaurantreview.findAll).to.not.equal(42);
  });
});


describe('restaurantreviewexpect', function() {
  it('Restaurant Expect', function() {

    expect(restaurantreview.update, 'nooo why fail??').to.be.undefined;
    should.fail("Function is not undefined");
  });
});

describe('restaurantreviewexpect', function() {
  it('Restaurant Expect', function() {

  expect(restaurantreview.update).to.be.ok;
  });
});








