'use strict';

// const parcel = require('../Hub/parcel.js');
const client = require('socket.io-client');
const PORT = process.env.PORT || 3001;

// connect driver client to the server
const driverClient = client(`http://localhost:${PORT}/caps`);

//confirming pickup and emitting in-transit event
driverClient.on('join', (payload) => {
  console.log(`DRIVER: picked up ${payload.orderID}`);
  driverClient.emit('in-transit', payload);
});

// confirming in-transit and emitting delivered event
driverClient.on('delivered', (payload) => {
  console.log(`DRIVER: delivered up ${payload.orderID}`);
});

