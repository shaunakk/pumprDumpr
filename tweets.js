var Twitter = require('twitter');
var client = new Twitter({consumer_key: 'SdhqyogLOTVt7QJjBcXTbsBHE', consumer_secret: 's73WmhkPOm3QcgAM2Yozfn5CelQ36sYoQmdBmKjuVNcJeAlVXk', access_token_key: '3303757363-SqSh0Ol7lXzT9lSoPBUDC2flnpTCYF4ORjtE91h', access_token_secret: 'bgyjEfAZGBFlok9uSp3vJg67VCw1rGkw0FecLo9THs6Eg'});
var params = {
  screen_name: 'nodejs'
};
client.get('search/tweets.json', {
  q: "pumprdumpr",
  count: 50
}, function(error, tweets, response) {
  if (typeof tweets != undefined) {
    console.log(JSON.stringify(tweets));
    for (i = 0; i < tweets.statuses.length; i++) {}
    console.log(JSON.stringify())
  }
});
