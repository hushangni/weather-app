const request = require('request');

const url = 'https://api.darksky.net/forecast/d6463c742956a00af3794f444f6cbd67/37.8267,-122.4233?lang=es';

request({ url:url, json:true }, (err, res) => {
    console.log(res.body.daily.data[0].summary, `it is currently ${res.body.currently.temperature} degress out and there is a ${res.body.currently.precipProbability}% chance of raining`);

});

// Geocoding
// Address -> Lat/Long -> Weather