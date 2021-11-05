'use strict';

// const parcel = require('../Hub/parcel.js');
const client = require('socket.io-client');
const PORT = process.env.PORT || 3001;

const vendorClient = client(`http://localhost:${PORT}/caps`);

const storeInfo = { 
  store: '1-206-flowers',
  orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
  customer: 'Jamal Braun',
  address: 'Schmittfort, LA',
};

vendorClient.on('delivered', (payload) => {
  console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
});

vendorClient.emit('pickup', storeInfo);


