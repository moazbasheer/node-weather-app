const request = require('request');

const geocode = (city, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1338fd7d54a9aeb549539c0ebee3fb5b&query=' + encodeURIComponent(city) + '&units=f';
    
    request({url, json: true},(error, {body}) => {
        if(error){
            callback('Unable to get the server!',undefined);
        } else if(body.error) {
            callback('Unable to find this location',undefined);
        } else {
            
            callback(undefined, {
                latitude: body.location.lat,
                longitude: body.location.lon,
                location: body.location.name + ", " + body.location.country
            })
        }
    })
    
}
module.exports = geocode;