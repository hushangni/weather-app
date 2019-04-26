const request = require("request");
const geocode = require("./utils/geocode");
const forcast = require("./utils/forcast");

const address = process.argv[2];

if (!address) {
  console.log("Please provide an address");
} else {
  geocode(address, (err, {latitude, longitude, location}) => {
    if (err) {
      return console.log(err);
    }

    forcast(latitude, longitude, (err, forcast) => {
      if (err) {
        return console.log(err);
      }

      console.log(location);
      console.log(forcast);
    });
  });
}

