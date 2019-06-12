const request = require('request')

// const url = 'https://api.darksky.net/forecast/a76a34ad3152b104c381a5d36e8d7403/37.8267,-122.4233'

// request({ url: url, json: true }, (error, response) => {
//     //in case request fails, the error param will be populated
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         // in case an insufficient request and error isn't populated
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.daily.data[0].summary + " It is currently " + response.body.currently.temperature + " degrees out.  There is a " + response.body.currently.precipProbability + "% chance of rain.")
//     }
// })

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a76a34ad3152b104c381a5d36e8d7403/' + latitude + ',' + longitude

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)  
        } else {
            console.log(body)
            callback(undefined, body.daily.data[0].summary + " It is currently " + body.currently.temperature + " degrees out.  There is a " + body.currently.precipProbability + "% chance of rain.  Rain would be at an intensity of " + body.currently.precipProbability + ".")
        }
    })
}

module.exports = forecast