var $ = require('jquery');
var baseUrl = "http://localhost:51764/api/history";

var addHistory = function(ticker, callback) {
    
    $.post({
       url: baseUrl,
       data: "Ticker=" + ticker,
       success: callback
    });
    
};

var getHistory = function(callback) {
    
    $.get({
        url: baseUrl,
        success: callback
    });
    
};

module.exports = { 
    addHistory: addHistory, 
    getHistory: getHistory 
};