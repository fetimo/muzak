var SpotifyWebApi = require('spotify-web-api-node');
var _ = require('lodash');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId : 'fcecfc72172e4cd267473117a17cbd4d',
  clientSecret : 'a6338157c9bb5ac9c71924cb2940e1a7',
  redirectUri : 'http://www.example.com/callback'
});

exports.searchTracks = function (text, first, cb) {
    console.log('searchTracks', text);
    spotifyApi.searchTracks(text)
        .then(function (data) {
            if (data.body.tracks.items.length) {
                if (first === 'true') {
                    cb(null, 'I found this, any good? ' + data.body.tracks.items[0].uri);
                } else {
                    cb(null, 'How about this, any better? ' + _.sample(data.body.tracks.items).uri);
                }
            } else {
                cb(null, 'Sorry, I couldn\'t find any other tracks.');
            }
        }, function (err) {
            console.log('nope', err);
            cb(null, 'Something went wrong!');
        });
};