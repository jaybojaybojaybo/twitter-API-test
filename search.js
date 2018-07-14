var Twit = require('twit');

var config = require('./config')

var T = new Twit(config);

var pages = 6; //set pages to increase amount of results received by increments of 20

var params = {
    f: 'users',
    q: 'portland'
}

let multiDataLists = [];

for(let i = 1; i <= pages; i++){
    params.page = i;
    T.get('users/search', params, searchedData);
}

function searchedData(err, data, response) {
    let dataList = [];
    let tweets = data;
    tweets.forEach(function(tweet){
        // (tweet.url).toString().includes("github") ? 
            multiDataLists.push(tweet.name);
            // (console.log(tweet.name));
    });
    console.log(multiDataLists.length);
}

