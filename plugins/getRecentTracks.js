var LastfmAPI = require('lastfmapi');
var _ = require('lodash');

var lfm = new LastfmAPI({
    'api_key': '5631129d4063dacb5ed5fed406077101',
    'secret': '8da723a0167814d3f38e595eee370d76'
});

exports.getRecentTracks = function (cb) {
    this.user.getVar('firstName', function (e, name) {
        lfm.user.getRecentTracks({
            user: name,
            limit: 1
        }, function (err, data) {
            if (err) {
                cb(null, 'Sorry, I couldn\'t find you :slightly_frowning_face:');
            } else {
                cb(null, 'Your most recent track is ' + data.track[0].name + ' by ' + data.track[0].artist['#text'] + '.');
            }
        });
    });
};

exports.searchAndPlayRecentTrack = function (cb) {
    console.log('-------');
    console.log('searchAndPlayRecentTrack');
    this.user.getVar('firstName', function (e, name) {
        lfm.user.getRecentTracks({
            user: name,
            limit: 1
        }, function (err, data) {
            if (err) {
                cb(null, 'Sorry, I couldn\'t find you :slightly_frowning_face:');
            } else {
                cb(null, '^searchTracks(track:' + data.track[0].name + ' artist:' + data.track[0].artist['#text'] + ', true)');
            }
        });
    });
};

exports.getSimilarTrack = function (text, cb) {
    console.log('getSimilarTrack', text);
    lfm.artist.getSimilar({
        artist: text,
        autocorrect: 1,
        limit: 5
    }, function (err, data) {
        if (err) {
            cb(null, 'Sorry, Last.fm broke :slightly_frowning_face:');
        } else {
            cb(null, '^searchTracks(artist:' + _.sample(data.artist).name + ', true)');
        }
    });
};