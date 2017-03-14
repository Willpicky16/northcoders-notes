/**
 * Chaining Promises
 * =================
 * Now we can promisify all our functions.
 * 
 * The key concept to understand here is that we can chain .then() calls
 * Whatever we return out of a .then(handler) will be converted into a promise
 * 
 */

const axios = require('axios');
const URL = require('./config').URL;

function getSalary () {
  return axios.get(URL + 'gross_salary')
}

function subtractTax (salary) {
  return axios.get(URL + 'net_salary?gross_salary=' + salary)
}

function subtractRent (salary) {
  return axios.get(URL + 'disposable_income?net_salary=' + salary)
}

function logDisposableIncome () {
  getSalary()
    .then(function (res) {
      return subtractTax(res.data.gross_salary);
    })
    .then(function (res) {
      return subtractRent(res.data.net_salary);
    })
    .then(function (res) {
      console.log(res.data.disposable_income);
    })
    .catch(function (err) {
      console.log(err);
    });
}

logDisposableIncome();
