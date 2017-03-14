/**
 * Let's refactor our functions to actually fetch data from an API using superagent
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