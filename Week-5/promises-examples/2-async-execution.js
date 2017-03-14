/**
 * Asynchronous Execution
 * ======================
 *** We use setTimeout to simulate any async operation that takes some time to complete
 * 
 *** Even if we set the time argument to 0 milliseconds, deferred happens after sync because
 * the JS engine can only handle 1 execution context at a time. 
 * 
 *** The call to deferred is put on a queue that will execute it not sooner than 0ms, 
 * but only after the current execution context is over
 * 
 */

function sync () {
  setTimeout(deferred, 0);
  console.log('sync');
}

function deferred () {
  console.log('deferred');
}
sync();