! function(a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
  function b(b) {
    var g = b || window.event,
      h = i.call(arguments, 1),
      j = 0,
      l = 0,
      m = 0,
      n = 0,
      o = 0,
      p = 0;
    if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
      if (1 === g.deltaMode) {
        var q = a.data(this, "mousewheel-line-height");
        j *= q, m *= q, l *= q
      } else if (2 === g.deltaMode) {
        var r = a.data(this, "mousewheel-page-height");
        j *= r, m *= r, l *= r
      }
      if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
        var s = this.getBoundingClientRect();
        o = b.clientX - s.left, p = b.clientY - s.top
      }
      return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
    }
  }

  function c() {
    f = null
  }

  function d(a, b) {
    return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
  }
  var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
    h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
    i = Array.prototype.slice;
  if (a.event.fixHooks)
    for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
  var k = a.event.special.mousewheel = {
    version: "3.1.12",
    setup: function() {
      if (this.addEventListener)
        for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
      else this.onmousewheel = b;
      a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
    },
    teardown: function() {
      if (this.removeEventListener)
        for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
      else this.onmousewheel = null;
      a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
    },
    getLineHeight: function(b) {
      var c = a(b),
        d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
      return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
    },
    getPageHeight: function(b) {
      return a(b).height()
    },
    settings: {
      adjustOldDeltas: !0,
      normalizeOffset: !0
    }
  };
  a.fn.extend({
    mousewheel: function(a) {
      return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
    },
    unmousewheel: function(a) {
      return this.unbind("mousewheel", a)
    }
  })
});

function scrollable(bool = true) {
  var o = this,
    step = 100;
  if (bool)
    o.html('<div class="scrollable box"><div class="scrollable content">' + o.html() + '</div><div class="scrollable bar"><div class="scrollable thumb"></div></div></div>');
  var bar = o.find('.bar'),
    thumb = o.find('.thumb'),
    content = o.find('.content'),
    box = o.find('.box');
  sizeScrollable();
  thumb.draggable({
    containment: "parent",
    axis: "y",
    drag: function(event, ui) {
      var x = ui.position.top / bar.height() * content[0].scrollHeight;
      content.scrollTop(x);
    }
  });
  o.mousewheel(function(event, delta) {
    event.preventDefault();
    content.scrollTop(content.scrollTop() - (step * delta));
    thumb.css({
      top: (content.scrollTop() / content[0].scrollHeight * 100) + "%"
    });
  });
  $(window).resize(sizeScrollable);

  function sizeScrollable() {
    content.css({
      right: bar.width()
    });
    box.css({
      width: o.outerWidth(),
      height: o.outerHeight()
    });
    thumb.css({
      height: (o.outerHeight() / content[0].scrollHeight * 100) + "%"
    });
  }
}

$(function() {
  var username, pathimg, numclicks = 0,
    counttotmsj = 0,
    color,
    pathmich = 'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/53274830_2199455340113348_920469722699399168_n.jpg?_nc_cat=106&_nc_ht=scontent-mia3-2.xx&oh=ecc8ceee8eb01150b0e78db851c494cf&oe=5D041048',
    pathpao = 'https://scontent.ftru3-1.fna.fbcdn.net/v/t1.0-9/53462628_1091758511005738_8906998264725766144_n.jpg?_nc_cat=100&_nc_ht=scontent.ftru3-1.fna&oh=489f975f8d306d1eb5df3ae69cfc233c&oe=5D202F75';
  $('#modal').modal('show');
  $('#modal').on('shown.bs.modal', function() {
    $('#username').focus();
  });
  $.fn.scrollable = scrollable;
  $('#chats').scrollable();
  $('#chat').scrollable();
  $('#btn-emoji').on('click', function() {
    numclicks++;
    if (numclicks == 1) {
      $('#emoji-container').animate({
        top: '51vh'
      }, "slow");
    }
    if (numclicks == 2) {
      $('#emoji-container').animate({
        top: '-500px'
      }, "slow");
      numclicks = 0;
    }
  });
  var socket = io();
  var message = $('#chat-message');
  var chat = $('#chat');
  $('#btn-new-user').on('click', function(e) {
    if (!$('#username').val()) return;
    username = $('#username').val().trim().replace(/\s+/, ' ').toLowerCase();
    color = getColorRandom();
    socket.emit('new user', username, color, (bool) => {
      if (!bool) {
        $('#noti').removeClass('alert-info').addClass('alert-danger').html("Este usuario ya existe.");
      } else {
        $('#modal').modal('hide');
        if (username == "michaell") {
          $('#user-img').html(`<object class="my-img mx-auto" data="` + pathmich + `"><i class="fas fa-user mx-auto"></i></object>`);
        } else if (username == "paola") {
          $('#user-img').html(`<object class="my-img mx-auto" data="` + pathpao + `"><i class="fas fa-user mx-auto"></i></object>`);
        } else {
          $('#user-img-obj').css({
            backgroundColor: color,
            color: "white"
          });
          $('#img-container').css({
            boxShadow: "px 10px 50px 0px " + color
          });
          $('#user-img-obj').html(getSiglas(username));
        }
        $('#dash-username').html(username);
        $('#username').val('');
        message.focus();
      }
    });
  });
  socket.on('usernames', data => {
    let html = '',
      img = '';
    for (i = 0; i < data.length; i++) {
      if (data[i].username == username) continue;
      if (data[i].username == 'michaell') {
        img = `<object data="` + pathmich + `" class="mini-img"><i class="fas fa-user"></i></object>
          <i class="fas fa-circle status"></i>`;
      } else if (data[i].username == 'paola') {
        img = `<object data="` + pathpao + `" class="mini-img"><i class="fas fa-user"></i></object>
          <i class="fas fa-circle status"></i>`;
      } else {
        img = `<object class="mini-img" style="background-color: ${data[i].color}; color: white;">${getSiglas(data[i].username)}</object>`;
      }
      html += `<li id="${data[i].username}" class="row chat-card">
          <div class="col-md-3">
            <div class="mini-img-container" style="box-shadow: 0px 5px 20px 0px ${data[i].color};"><div class="mini-img-container">${img}</div></div>
          </div>
          <div class="col-md-6 pt-3 px-0">
            <p class="h6 text-sm-left font-weight-bold text-truncate my-1">${data[i].username}</p>
            <p id="last-msg" class="text-sm-left text-truncate gray"><small></small></p>
          </div>
          <div class="col-md-3 pr-3 pl-0 pt-2">
            <p id="date-msg" class="date gray" style="text-align: right;"><small></small></p>
            <div class="count-msgs">
              <small id="count-msg">0</small>
            </div>
          </div>
        </li>`;
    }
    $('.chat-container').html(html);
    $('#chats').scrollable(false);
  });
  $('.emoji').on('click', function() {
    $(this).clone().toggleClass('emoji').appendTo(message);
    message.focus();
  });

  function sendMessage() {
    if (!message.html() || $('#contact-name').text() == 'Selecciona un contacto') return;
    socket.emit('send message', message.html());
    message.html('');
  };

  function getColorRandom() {
    var c = {
      r: Math.floor((Math.random() * 250) + 10),
      g: Math.floor((Math.random() * 250) + 10),
      b: Math.floor((Math.random() * 250) + 10)
    };
    var rgbToHex = function(rgb) {
      var hex = Number(rgb).toString(16);
      if (hex.length < 2) {
        hex = "0" + hex;
      }
      return hex;
    };
    c.r = rgbToHex(c.r);
    c.g = rgbToHex(c.g);
    c.b = rgbToHex(c.b);
    return `#${c.r}${c.g}${c.b}`;
  }

  function getSiglas(username) {
    var arrayname = username.split(' '),
      i = 0,
      siglas = '';
    while (arrayname[i]) {
      siglas += arrayname[i].charAt(0);
      if (i++ > 3) break;
    }
    return siglas;
  }
  $('.my-btn').on('click', function() {
    sendMessage();
  });
  $('#chat-message').on('keypress', function(e) {
    if (e.which == 13) {
      e.preventDefault();
      sendMessage();
    }
  });
  $('#chat-message').on('keyup', function(e) {
    if (e.which == 13) return;
    if (message.text())
      socket.emit('writing', message.text());
  });
  $('#username').on('keypress', function(e) {
    if (e.which == 13) {
      $('#btn-new-user').click();
    }
  });
  socket.on('new message', data => {
    var today = new Date();
    var hora = today.format("hh:MM");
    var fecha = today.format("mmm dd");
    if (data.username != username) {
      counttotmsj++;
      var img = '';
      if (data.username == 'michaell') {
        img = `<object data="${pathmich}" class="mini-img-2"><i class="fas fa-user"></i></object>`;
      } else if (data.username == 'paola') {
        img = `<object data="${pathpao}" class="mini-img-2"><i class="fas fa-user"></i></object>`;
      } else {
        img = `<object class="mini-img-2" style="background-color: ${data.color}; color: white;">${getSiglas(data.username)}</object>`;
      }
      $(`<div class="row py-1 h-20">
          <div class="col-2 col-md-1 p-0 text-center">
            <div class="mini-img-container-2" style="box-shadow: 0px 2px 5px 0px  ${data.color};">${img}</div>
          </div>
          <div class="col-9 col-md-10 p-0 px-2">
            <div class="other-msg">
              <small class="pr-5">${data.msg.trim().replace(/\s+/, ' ')}</small>
              <small class="hour py-1 pr-4">${hora}</small>
            </div>
          </div>
        </div>`).appendTo('#chat > div > .content');
      $('#chat-status').text(data.username + ' escribió.');
    } else {
      counttotmsj = 0;
      $(`<div class="row py-1 h-20">
        <div class="col-3 col-md-2"></div>
        <div class="col-9 col-md-10">
          <div class="my-msg">
            <small class="pr-5">${data.msg.trim().replace(/\s+/, ' ')}</small>
            <small class="hour py-1 pr-4">${hora}</small>
          </div>
        </div>
      </div>`).appendTo('#chat > div > .content');
      $('#chat-status').text('escribiste.');
    }
    $('#chat').scrollable(false);
    $('#chat > div > .content').scrollTop($('#chat > div > .content').prop('scrollHeight'));
    $('#' + data.username).find('#last-msg').html(data.msg);
    $('#' + data.username).find('#date-msg').html(fecha);
    $('#' + data.username).find('#count-msg').html((counttotmsj > 99) ? "99+" : counttotmsj);
  });
  socket.on('wrote', data => {
    if (data.username != username)
      $('#chat-status').text(data.username + ' está escribiendo: ' + data.msg);
  });

});