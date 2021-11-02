'use strict';

const parcel = require('./parcel.js');

// confirming pickup and emitting in-transit event
parcel.on('pickup', (payload) => {
  console.log('EVENT: pickup', payload);
  console.log(`DRIVER: picked up ${payload.storeInfo.orderID}`);

  parcel.emit('in-transit', payload);
});

// confirming in-transit and emitting delivered event
parcel.on('in-transit', (payload) => {
  console.log('EVENT: in-transit', payload);
  console.log(`DRIVER: delivered up ${payload.storeInfo.orderID}`);

  parcel.emit('delivered', payload);
});