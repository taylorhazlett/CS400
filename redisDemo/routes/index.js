var express = require('express');
var router = express.Router();

const redis = require('redis');
const client = redis.createClient();

client.on("error",function(error) {
    console.error(error);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  //grab a str off of the req
    const theString = req.query.theString;

  //see if the reversed string is in cache (redis)
    client.exists(theString, (err, response) => {
        if (err) {
            console.log(err);
            throw new Error(err);
        }
        if (response === 1) {
            client.get(theString, (err, response) => {
                res.render('index', {title: response});
            })
        }
        else {
            const revString = theString.split('').reverse().join('');
            client.set(theString, revString, (err,response) => {
                console.table(response)
            })
        }
    })
  //if yes, return

  //if no, generate and store

    // return reverse string

});

module.exports = router;
