var express = require('express');
var app = express();

app.get('/', function (req, res) {
    if (req.query.ip == undefined || req.query.ip == '') {
        res.send('Hello World! ' + process.env.APPVALUE);
    } else {
        if (ValidateIPaddress(req.query.ip)) {
            res.send('Hello World! with ' + req.query.ip);
        } else {
            res.status(400).send('invalid ip given');
        }
    }
});

app.listen(process.env.PORT, function () {
    if (typeof (PhusionPassenger) !== 'undefined') {
        console.log('App running inside Passenger.');
    } else {
        console.log('App running on port ' + process.env.PORT);
    }
});

function ValidateIPaddress(ipaddress) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
        return (true)
    }
    console.log('invalid ip adress ' + ipaddress)
    return (false)
}  