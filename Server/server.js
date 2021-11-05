'use strict';

const socketio = require('socket.io');
const logger = require('./eventLogger');
const PORT = process.env.PORT || 3001;

// creates and starts our Web Socket server.
const server = socketio(PORT);

// creates a socket.io namespace
const caps = server.of('/caps');

caps.on('connection', socket => {
  console.log(`Socket is connected ${socket.id}`);

  socket.on('pickup', payload => {
    socket.join(payload.orderId);
    caps.emit('join', payload);
    logger('pickup', payload);
  });

  socket.on('in-transit', payload => {
    socket.join(payload.orderId);
    logger('in-transit', payload);
    caps.to(payload.orderId).emit('delivered', payload);
    logger('delivered', payload);
  });
});

