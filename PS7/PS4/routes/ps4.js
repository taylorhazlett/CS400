const express = require('express');
const router = express.Router();
const fetch = require('node-fetch')


const weather_config = require('../config/api_config.js')

router.route('/:city')
    .get((req,res,next)=> {
        const param = req.params
        const city = param.city;
        const options = {
            'method': 'GET',
            'url': 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid='+weather_config,
        }

        let getWeather = async (key) => {
            let returnValueRaw = await fetch(options.url);
            let returnValue = await returnValueRaw.json();
            //returnValue = returnValue.list[0].weather[0].main;
            return returnValue;
        };

        getWeather(weather_config).then(returnValue => res.send(returnValue));
      //
    });

module.exports = router;
