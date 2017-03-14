/**
 * Now let's imagine that getSalary comes through a slow network request (that we simulate with a setTimeout)
 * As we've seen before, the only way to grab hold of the value of the response is to use a callback.
 * So we add a callback to getSalary and adjust getDisposableIncome()
 */

function getSalary (callback) {
  setTimeout(() => {
    callback(25000);
  }, 1000);
}

function subtractTax (salary) {
  return salary * 0.75;
}

function subtractRent (salary) {
  return salary - 5000;
}

function getDisposableIncome (callback) {
  getSalary(salary => {
    salary = subtractTax(salary);
    salary = subtractRent(salary);
    callback(salary);
  });
}

getDisposableIncome(salary => {
  console.log(salary);
});