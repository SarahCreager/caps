'use strict';

const parcel = require('./parcel.js');

// listening for message to come through before it is sent. 
require('./driver.js');

const time = '2020-03-06T18:27:17.732Z';
const storeInfo = { 
  store: '1-206-flowers',
  orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
  customer: 'Jamal Braun',
  address: 'Schmittfort, LA',
};

parcel.on('delivered', (payload) => {
  console.log(`VENDOR: Thank you for delivering ${payload.storeInfo.orderID}`);
  console.log('EVENT: delivered', payload);
});

parcel.emit('pickup', {
  time,
  storeInfo,
});

