var http = require('http');
var url = require('url');
var fs = require('fs');


http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE', // If needed
        'Access-Control-Allow-Headers': 'X-Requested-With,content-type', // If needed
        'Access-Control-Allow-Credentials': true
    });

var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.api-ninjas.com/v1/holidays?country=CA&year=2021&type=optional_holiday',
  'headers': {
    'X-Api-Key': 'PzQf3Q54wLLmTMX6mUr8+w==mn6JqtQvXelXNz9a'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
 console.log(response.body);
  res.end(response.body);
});

}).listen(8080);