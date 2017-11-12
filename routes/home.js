var express = require('express');
var jayson = require('jayson');
var client = jayson.client.http('http://127.0.0.1:5123/api');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('home', {
        title: '浏览地图'
    });
});

router.get('/rpc-test', function(req, res, next) {
    client.request('App.TTT', ["WAHAHA"], function(err, response) {
        if (err) throw err;
        res.send(response.result); // 5!
    });
});

module.exports = router;