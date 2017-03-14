/**
 * Callback hell
 * =============
 * Now let's imagine that all operations are asynchronous because they are provided by different requests
 * The procedure is the same, but nested instead of sequential (flat);
 * 
 * As soon as we start nesting more than one callback we enter callback hell.
 * The sequential execution nature of the operation is not clearly mirrored by our code.
 * Callbacks also make our functions loose the ability to return values out of them.
 */

const request = require('superagent');
const URL = require('./config').URL;

function getSalary (callback) {
  request(URL + 'gross_salary')
    .end(function (err, response) {
      callback(response.body.gross_salary);
    });
}

function subtractTax (salary, callback) {
  request(URL + 'net_salary?gross_salary=' + salary)
    .end(function (err, response) {
      callback(response.body.net_salary);
    });
}

function subtractRent (salary, callback) {
  request(URL + 'disposable_income?net_salary=' + salary)
    .end(function (err, response) {
      if (err) console.log(err)
      callback(response.body.disposable_income);
    });
}

function getDisposableIncome (callback) {
  getSalary(function (gross_salary) {
    subtractTax(gross_salary, function (net_salary) {
      subtractRent(net_salary, function (disposable_income) {
        callback(disposable_income);
      });
    });
  });
}

getDisposableIncome(function (income) {
  console.log(income);
});