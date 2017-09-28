/**
 * RESTサービスAPI
 *
 */

var express = require('express');
var router = express.Router();
var repository = require('../../lib/assessmentRepo');
router.route('/')
.post(function( req, res, next ){
    req.body.created = new Date();
    req.body.modified = new Date();
    res.type('application/json');
    res.status(200).send(req.body);
});

module.exports = router;