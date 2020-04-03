let express = require('express');
let router = express.Router();
let fetch = require('node-fetch')


const weather_config = require('../config/api_config.js')

router.route('/')
    .get((req,res,next)=> {
        console.log(weather_config);
        let options = {
            'method': 'GET',
            'url': 'https://api.openweathermap.org/data/2.5/forecast?zip=08406,us&appid='+weather_config,
        }

        const getWeather = async (key) => {
            let returnValueRaw = await fetch(options.url);
            let returnValue = await returnValueRaw.json();
            returnValue = returnValue.list[0].weather[0].main;
            console.log(returnValue)
            return returnValue;
        };

        getWeather(weather_config).then(returnValue => res.render('PS4', {string: returnValue})).catch(err => console.log(err));
    });

module.exports = router;