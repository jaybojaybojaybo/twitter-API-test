var Twit = require('twit');

var config = require('./config')

var T = new Twit(config);

var params = {
    f: 'users',
    q: 'portland',
    count: '1'
}

function searchedData(err, data, response) {
    return data;
}

console.log('first');

twitters = function (params) {
    return new Promise((resolve, reject) =>
        T.get('users/search', params, function (err, data, response) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    )
}

console.log('third');

twitters(params).then((result) => {
    console.log(result);
});