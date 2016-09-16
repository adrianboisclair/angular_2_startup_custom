'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var DEV_RESOURCES = "/builds/development/";
var RESOURCES = __dirname + DEV_RESOURCES;

/**
 * Route to Index
 */
app.get('/', function (req, res) {
    res.sendFile( RESOURCES + "index.html" );
});


/**
 * Resources
 */
app.use(express.static('builds/development/'));

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server app listening at http://%s:%s", host, port)

});
function thisFunc(x,y){
    // add them together
    return x + y;
}
/**
 * Sample Routes
 *
 */
// Test API
app.get('/test_api', function(req, res){
    res.send('success!!');
});
// This responds a POST request for the homepage
app.post('/', function (req, res) {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
});

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
});

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
});

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
});

