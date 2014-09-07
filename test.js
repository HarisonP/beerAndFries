"use strict";

var beerAndFries = require("./beerAndFries.js").beerAndFries;
console.log(beerAndFries);

exports.testBeerAndFriesScenario1 = function(test) {
  var testData = [{
    type: "beer",
    score: 10
  }, {
    type: "beer",
    score: 11
  }, {
    type: "fries",
    score: 1
  }, {
    type: "fries",
    score: 5
  }];

  test.equal(65, beerAndFries(testData));
  test.done();
};


exports.testBeerAndFriesScenario2 = function(test) {
  var testData = [{
    type: "beer",
    score: 1
  }, {
    type: "beer",
    score: 11
  }, {
    type: "fries",
    score: 0
  }, {
    type: "fries",
    score: 50
  }];

  test.equal(550, beerAndFries(testData));
  test.done();
};


exports.testBeerAndFriesScenario3 = function(test) {
  var testData = [{
    type: "beer",
    score: 5
  }, {
    type: "fries",
    score: 5
  }];

  test.equal(25, beerAndFries(testData));
  test.done();
};

exports.testBeerAndFriesScenario4 = function(test) {
  var testData = [];

  test.equal(0, beerAndFries(testData));
  test.done();
};

exports.testBeerAndFriesScenario5 = function(test) {
  var testData = [{
    type: "beer",
    score: 1000
  }, {
    type: "beer",
    score: 1010
  }, {
    type: "beer",
    score: 1020
  }, {
    type: "beer",
    score: 1030
  }, {
    type: "beer",
    score: 1040
  }, {
    type: "fries",
    score: 834
  }, {
    type: "fries",
    score: 500
  }, {
    type: "fries",
    score: -1
  }, {
    type: "fries",
    score: 0
  }, {
    type: "fries",
    score: 60
  }];

  test.equal(1442560, beerAndFries(testData));
  test.done();
};

var testBeerAndFriesScenario1 = function(test) {
  var testData = [{
    type: "beer",
    score: 10
  }, {
    type: "beer",
    score: 11
  }, {
    type: "fries",
    score: 1
  }, {
    type: "fries",
    score: 5
  }];

  console.log(65, beerAndFries(testData));
}();


var testBeerAndFriesScenario2 = function(test) {
  var testData = [{
    type: "beer",
    score: 1
  }, {
    type: "beer",
    score: 11
  }, {
    type: "fries",
    score: 0
  }, {
    type: "fries",
    score: 50
  }];

  console.log(550, beerAndFries(testData));
  // test.done();
}();


var testBeerAndFriesScenario3 = function(test) {
  var testData = [{
    type: "beer",
    score: 5
  }, {
    type: "fries",
    score: 5
  }];

  console.log(25, beerAndFries(testData));
  // test.done();
}();

var testBeerAndFriesScenario4 = function(test) {
  var testData = [];

  console.log(0, beerAndFries(testData));
  // test.done();
}();

var testBeerAndFriesScenario5 = function(test) {
  var testData = [{
    type: "beer",
    score: 1000
  }, {
    type: "beer",
    score: 1010
  }, {
    type: "beer",
    score: 1020
  }, {
    type: "beer",
    score: 1030
  }, {
    type: "beer",
    score: 1040
  }, {
    type: "fries",
    score: 834
  }, {
    type: "fries",
    score: 500
  }, {
    type: "fries",
    score: -1
  }, {
    type: "fries",
    score: 0
  }, {
    type: "fries",
    score: 60
  }];

  console.log(1442560, beerAndFries(testData));
  // test.done();
}();