var express = require('express');
var rpc = require('jsonrpc2');
var sys = require('sys');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

router.get('/test_rpc', function(req, res, next) {
    var client = new rpc.Client(8000, 'localhost');

    client.call('add', [1, 2], function(err, result) {
        //sys.puts('1 + 2 = ' + result);
        res.send('1 + 2 = ' + result);
    });
    //res.render('index', { title: 'Express' });
});

module.exports = router;
