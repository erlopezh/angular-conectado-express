var express = require('express');
var router = express.Router();
console.log('en el signup.js');

// POST /signup
router.post('/', function (req, res) {
  console.log('++++++++++++++++++++++++++++++++++');  
  console.log(req.body);

    // return a json response to angular
    res.json({
        'msg': 'success!'
    });
});

// GET /signup/info
router.get('/info', function (req, res) {
    // handle a get request to this route
});


module.exports = router;