const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const morgan = require('morgan');

const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

server.listen(app.get('port'), function() {
  console.log(`server on port ${app.get('port')}`);
});

require('./sockets')(io);