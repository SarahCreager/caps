'use strict';

const parcel = require('./Hub/parcel.js');
const logEvent = require('./Hub/eventLogger');

parcel.on('pickup', logEvent('pickup'));
parcel.on('in-transit', logEvent('in-transit'));
parcel.on('delivered', logEvent('delivered'));

require('./Driver/driver.js');
require('./Vendor/vendor.js');
