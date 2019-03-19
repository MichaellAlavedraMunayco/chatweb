const io = require('socket.io');

module.exports = io => {

  let users = {};

  io.on('connection', socket => {

    socket.on('new user', (username, color, bool) => {
      if (username in users) {
        bool(false);
      } else {
        bool(true);
        socket.username = username;
        socket.color = color;
        users[socket.username] = socket;
        updateNicknames();
      }
    });

    socket.on('send message', data => {
      io.sockets.emit('new message', {
        msg: data,
        username: socket.username,
        color: socket.color
      });
    });

    socket.on('writing', data => {
      io.sockets.emit('wrote', {
        username: socket.username,
        msg: data
      });
    });

    socket.on('disconnect', data => {
      if (!socket.username) return;
      delete users[socket.username];
      updateNicknames();
    });

    function updateNicknames() {
      var newarray = Object.values(users);
      for (var i = 0; i < newarray.length; i++) {
        newarray[i] = {
          username: newarray[i].username,
          color: newarray[i].color
        };
      }
      io.sockets.emit('usernames', newarray);
    }

  });
}