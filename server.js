const express    = require('express');
const socketio   = require('socket.io');

const PORT = process.env.PORT || 5000;
var app = express();

const server = app.listen(PORT, () => console.log('App listening on port ' + PORT));
const websocket = socketio(server); //Initiate Socket


websocket.on('connection', function(socket){
  socket.on('success', (data) => {});
  let data = ["Congratulation, success !"]
  // setInterval(() => {
    socket.emit('success', data);
  // }, 5000);
});

websocket.on('connection', function(socket){
  socket.on('failed', (data) => {});
  let data = ["Sorry, failed. Please try again later !"]
    socket.emit('failed', data);
});

websocket.on('connection', function(socket){
  socket.on('info', (data) => {});
  let data = ["Just information bray !"]
    socket.emit('info', data);
});