var request = require('request');
var jsonfile = require('jsonfile');

request('https://api.twitch.tv/kraken/chat/emoticon_images', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var emotes = JSON.parse(body).emoticons.map(e => e.code);
    console.log(emotes);
    jsonfile.writeFile('emotes.json', emotes, err => console.error(err));
  }
});
