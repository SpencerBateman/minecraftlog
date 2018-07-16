$.get('latest.log', { "_": $.now() }, function (data) {
  arrayOfLines = data.match(/[^\r\n]+/g);
  arrayOfLines.reverse();
  for (var line of arrayOfLines) {
    //console.log(line)
    time = line.split(' ', 1)
    time  = time[0].slice(1, -1)
    text = line.split(']: ', 2)[1]
    text = text.replace('<', '')
    text = text.replace('>', '')
    console.log(time)
    myDate = new Date(time)
    console.log(myDate)
    $('.log__list').append('<li class="log__item"><span class="time">' + time + '</span>' + '</span><span class="text">  -- ' + text + '</span></li>')
  }
});

