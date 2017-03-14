/**
 * Callbacks
 * =========
 * Now let's imagine that deferred has a value we are interested in. How can we grab hold of it?
 *
 * There is now way to return the value of deferred out of sync because deferred can only run
 * once the execution context of sync is over.
 * 
 * The only way we can do something once deferred is finished is by providing sync with a callback
 * The callback in this case is the only way we can grab hold of the moment when referred actually happens
 */

function sync (callback) {
  setTimeout(function () {
    const result = deferred();
    callback(result);
  }, 1000);
  console.log('sync');
}

function deferred () {
  return 'deferred';
}

sync(function (result) {
  console.log(result);
});