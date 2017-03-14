/**
 * Our First Promise
 * =================
 * Promises are objects (with specific functionality baked in) that represent
 * a value in the future. 
 * 
 * Promises have 3 states: pending, resolved and rejected.
    * Pending means that the resolution of the promise is being computed.
    * Resolved means that the promise finished successfully
    * Rejected means that the promise finished with an error
 * 
 * Instead of calling a callback, the Promise constructor provides us with resolve/reject functions that
 * we can pass arguments to.
 * 
 * All promises have a then() method that attaches to them a function that tells the promise what to do when
 * it resolves/rejects.
 * 
 * Let's promisify our getSalary() function:
 */

const request = require('superagent');
const URL = require('./config').URL;

let getSalary = function () {
  const salaryPromise = new Promise(function (resolve, reject) {
    request(URL + 'gross_salary')
      .end(function (err, response) {
        if (err) return reject(err);
        resolve(response.body.gross_salary);
      });
  });
  return salaryPromise;
}

let salaryPromise = getSalary();

salaryPromise.then(function (salary) {
  console.log(salary)
});

salaryPromise.catch(function (err) {
  console.log(err);
})

/**
 * We can also use a promise-based library to make our AJAX requests
 */

const axios = require('axios');

getSalary = function () {
  return axios.get(URL + 'gross_salary');
}

salaryPromise = getSalary();

salaryPromise.then(function (salary) {
  console.log(salary)
});

salaryPromise.catch(function (err) {
  console.log(err);
});