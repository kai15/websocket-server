// const logger     = require('morgan');
const express    = require('express');
// const bodyParser = require('body-parser');
const socketio   = require('socket.io');

const port = 8000;
var app = express();
const server = app.listen(port, () => console.log('App listening on port ' + port));
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