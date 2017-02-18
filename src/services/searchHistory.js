var $ = require('jquery');
var baseUrl = "http://localhost:51764/api/history";

var addHistory = function(ticker, callback) {
    
    $.post({
       url: baseUrl,
       type: 'POST',
       data: "Ticker=" + ticker,
       success: callback
    });
    
};

var getHistory = function(callback) {
    
    $.get({
        url: baseUrl,
        type: 'GET',
        success: callback
    });
    
};

module.exports = { 
    addHistory: addHistory, 
    getHistory: getHistory 
};