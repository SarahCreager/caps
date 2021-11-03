'use strict';

// curried function. run it once and return another function to use in the eventHandler space. 
const logEvent = (event) => payload => {
  let log = {
    event,
    time: new Date().toString(),
    payload,
  };
  console.log(`EVENT`,log );
};

module.exports = logEvent;