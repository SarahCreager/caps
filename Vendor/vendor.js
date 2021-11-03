'use strict';

const parcel = require('../Hub/parcel.js');
const logEvent = require('../Hub/eventLogger');

const storeInfo = { 
  store: '1-206-flowers',
  orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
  customer: 'Jamal Braun',
  address: 'Schmittfort, LA',
};

parcel.on('delivered', (payload) => {
  console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
  logEvent('delivered');
});

parcel.emit('pickup', storeInfo);

