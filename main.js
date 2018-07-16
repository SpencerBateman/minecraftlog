$.get('latest.log', { "_": $.now() }, function (data) {
  arrayOfLines = data.match(/[^\r\n]+/g);
  arrayOfLines.reverse();
  for (var line of arrayOfLines) {
    console.log(line)
    time = line.split(' ', 1)
    time  = time[0].slice(1, -1)
    sender = line.split(/]: (.+)/)[1]
    sender = line.split(']:', 1)
    sender = sender[0].split('] [', 2)
    sender = sender[1]
    console.log(sender)
    text = line.split(/]: (.+)/)[1]
    $('.log__list').append('<li class="log__item"><span class="time">' + time + '</span><span class="' + sender.substring(sender.length - 4)+'">' + sender + '</span><span class="text">' + text + '</span></li>')
  }
});

