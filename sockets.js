const io = require('socket.io');

module.exports = io => {

  let users = {};

  io.on('connection', socket => {

    socket.on('new user', (data, bool) => {
      if (data in users) {
        bool(false);
      } else {
        bool(true);
        socket.nickname = data;
        users[socket.nickname] = socket;
        updateNicknames();
      }
    });

    socket.on('send message', data => {
      io.sockets.emit('new message', {
        msg: data,
        nick: socket.nickname
      });
    });

    socket.on('writing', data => {
      io.sockets.emit('wrote', {
        nick: socket.nickname,
        msg: data
      });
    });

    socket.on('disconnect', data => {
      if (!socket.nickname) return;
      delete users[socket.nickname];
      updateNicknames();
    });

    function updateNicknames() {
      io.sockets.emit('usernames', Object.keys(users));
    }

  });
}