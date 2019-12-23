const request = require('request');
const key = 'b2d5480b7cac854ab50e07ef7801c71a';


const forecast = ( latitude, longitude , callback ) => {
    const url = `https://api.darksky.net/forecast/${key}/${latitude},${longitude}`;
    request({ url , json:true }, (error,{ body }) => {

        if ( error ) {
            callback('unable to connect to weather service!', undefined);
        }
        else if ( body.error ) {
            callback('unable to find location!', undefined);
        }
        else {
            const forecastData = body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees with a ' + (body.currently.precipProbability * 100) + '% chance of rain.'
            callback(undefined, forecastData);
        }
        
    });
};


module.exports = forecast;