/**
 * RESTサービスAPI
 *
 */

var express = require('express');
var router = express.Router();
router.route('/')
.post(function(req, res, next){
    console.log(req.body);
    res.status(200).send(req.body);
})
.get(function(req, res, next){
    res.status(200).send("成功");
});

module.exports = router;