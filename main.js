var names = ['SpencerBateman', 'Theyellowk123']

String.prototype.insert = function (index, string) {
  if (index > 0)
    return this.substring(0, index) + string + this.substring(index, this.length);
  else
    return string + this;
};

$.get('latest.log', { "_": $.now() }, function (data) {
  arrayOfLines = data.match(/[^\r\n]+/g);
  arrayOfLines.reverse();
  for (var line of arrayOfLines) {
    time = line.split(' ', 1)
    time  = time[0].slice(1, -1)
    text = line.split(']: ', 2)[1]
    text = text.replace('<', '')
    text = text.replace('>', '')
    for (var name of names) {
      if (text.indexOf(name) != -1) {
        startOfName = text.indexOf(name)
        endOfName = (text.indexOf(name) + name.length)
        console.log(startOfName)
        console.log(endOfName)
        text = text.insert(endOfName, '</span>')
        startString = '<span class="' + name + '">'
        text = text.insert(startOfName, startString)
      }
    }
    if (text.substring(0,4) != 'UUID') {
      $('.log__list').append('<li class="log__item"><span class="time">' + time + '</span>' + '</span><span class="text">  -- ' + text + '</span></li>')
    }
  }
});

