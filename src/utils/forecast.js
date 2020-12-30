const request = require('request');

const forecast = (latitude, longtitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1338fd7d54a9aeb549539c0ebee3fb5b&query=' + latitude + ',' + longtitude + '&units=f';
    
    request({url, json: true},(error, {body}) => {
        if(error){
            callback('Unable to get the server!',undefined);
        } else if(body.error) {
            callback('Unable to find this location',undefined);
        } else {
            callback(undefined, "temperature is " + body.current.temperature);
        }
    })
}
module.exports = forecast;