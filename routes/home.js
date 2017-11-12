var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('home', {
        title: '浏览地图'
    });
});

module.exports = router;