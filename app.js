const request = require("request");
const geocode = require('./utils/geocode');

const url =
  "https://api.darksky.net/forecast/d6463c742956a00af3794f444f6cbd67/37.8267,-122.4233";

request({ url: url, json: true }, (err, res) => {
  if (err) {
    console.log("Error! Unable to connect to weather service.");
  } else if (res.body.error) {
    console.log("unable to find location");
  } else {
    console.log(
      res.body.daily.data[0].summary,
      `it is currently ${
        res.body.currently.temperature
      } degress out and there is a ${
        res.body.currently.precipProbability
      }% chance of raining`
    );
  }
});

// Geocoding
// Address -> Lat/Long -> Weather
// const geoCodeUrl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/toronto.json?access_token=pk.eyJ1IjoiaHVzaGFuZ25pIiwiYSI6ImNqdXg0djMzMzBqYzk0ZXBmejFva2RmZWIifQ.1QiSPj5V4zfvxt_uhYJMCg";


geocode("boston", (err, data) => {
    console.log('Error', err);
    console.log('Data', data);
});
