var $ = require('jquery');
var getQuote = require('./services/getQuote.js');

$(document).ready(function() {
    
    $("#searchControl").click(function() {
        var tickerInputValue = $("#tickerInput").val();
        getQuote(tickerInputValue, searchTickerCallback);
    });
    
});

var searchTickerCallback = function(result) {
    $("#companyName").text(result.CompanyName);
    $("#openValue").text(result.OpenAmount);
    $("#highValue").text(result.DayHigh);
    $("#lowValue").text(result.DayLow);
}