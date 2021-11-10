## November 9, Asynchronous JS
* Callbacks can be used in synchronous as well as asynchronous operations
* Async functions, regardless of where they are located in the code, won't get executed until all synchronous code has run
* Async code gets passed to the web/c++ APIs
  * It waits there until it resolves
  * Then, once it resolves, it goes back to the task queue
  * Task queue will begin to process after sync code has all run
  * Task queue moves it's code to the call stack in order, once the call stack is clear

  ## API Calls
  * Pass a callback to an API call to further process the data

