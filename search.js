var Twit = require('twit');

var config = require('./config')

var T = new Twit(config);

var params = {
    q: 'portland',
    count: 10
}

T.get('users/search', params, searchedData);

function searchedData(err, data, response) {
    let dataList = [];
    let tweets = data;
    tweets.forEach(function(tweet){
        dataList.push(tweet.name);
    });
    console.log(dataList);
}