const request = require('request');
const token = 'pk.eyJ1IjoiamFyZWRiYXVtIiwiYSI6ImNrNGdrenI4dTBhbjYzbXF4M3ZmeTg1cHEifQ.wbfhlFR5MT_7DofYVxRDaA';

const geocode = ( address , callback ) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${token}`;

    request({url, json:true}, (error,{body}) => {
        if ( error ) {
            callback('Unable to connect to location services!', undefined);
        }
        else if ( body.features.length === 0 ) {
            callback('No location data available. Try another search!', undefined);
        }
        else {
            
            const latitude = body.features[0].center[1];
            const longitude = body.features[0].center[0];
            const fullName = body.features[0].place_name;

            geocodeData = {
                latitude,
                longitude,
                fullName
            }

            callback(undefined,geocodeData);
        }   
    
    });
};

module.exports = geocode;