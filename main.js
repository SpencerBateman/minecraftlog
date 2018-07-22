var names = ['SpencerBateman', 'Theyellowk123']

String.prototype.insert = function (index, string) {
  if (index > 0)
    return this.substring(0, index) + string + this.substring(index, this.length);
  else
    return string + this;
};

$.get('latest.log', { "-": $.now() }, function (data) {
  count = 0
  lines = data.match(/[^\r\n]+/g).reverse();
  for (line of lines) {
    count += 1
    ul = $('.log__list')
    list_item_id = 'item--' + count

    ul.append('<li class="log__item" id="' + list_item_id + '">')
    player = ''
    coords = ''
    message = ''
    text = line.split(']: ', 2)[1]
    text = text.replace('<', '')
    text = text.replace('>', '')
    // Determine which player is being referred to in the line
    for (name of names) {
      if (text.indexOf(name) != -1) {
        player = name
      }
    }
    // Append a specific message to when logging in for the first time.
    if (text.indexOf('logged in with entity id') != -1) {
      coords = data.match(/\(([^)]+)\)/)
      message = ' logged in at '
    }
    console.log(player)
    console.log(coords)
    console.log(message)
    $('#' + list_item_id).append('<img class="photo" src="img/' + player + '.png">')
    $('#' + list_item_id).append('<div class="text_container">')
    $('#' + list_item_id + ' .text_container').append('<h3>' + player + '</h3>')
    $('#' + list_item_id).append('</div>')
    $('#' + list_item_id).append('</li>')
  }
});
