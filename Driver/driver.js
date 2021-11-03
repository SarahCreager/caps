'use strict';

const parcel = require('../Hub/parcel.js');
const logEvent = require('../Hub/eventLogger');

// confirming pickup and emitting in-transit event
parcel.on('pickup', (payload) => {
  console.log(`DRIVER: picked up ${payload.orderID}`);

  parcel.emit('in-transit', payload);
});

// confirming in-transit and emitting delivered event
parcel.on('in-transit', (payload) => {
  logEvent('in-transit');
  console.log(`DRIVER: delivered up ${payload.orderID}`);
  
  parcel.emit('delivered', payload);
});

