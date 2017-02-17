var $ = require('jquery');
var getQuote = require('./services/getQuote.js');
var getLogo = require('./services/getLogo.js');
var searchHistory = require('./services/searchHistory.js');

$(document).ready(function() {
    
    $("#searchControl").click(function() {
        var tickerInputValue = $("#tickerInput").val();
        getQuote(tickerInputValue, tickerInfoCallback);
        searchHistory.getHistory(getHistoryCallback);
        //getLogo(tickerInputValue, logoCallback)
    });
    
});

var tickerInfoCallback = function(result) {
    $("#companyName").text(result.CompanyName);
    $("#openValue").text(result.OpenAmount);
    $("#highValue").text(result.DayHigh);
    $("#lowValue").text(result.DayLow);
}

var logoCallback = function(result) {
    var logoUrl = $(result).find("URL").text();
    $("#logo").attr("src", logoUrl);
}

var getHistoryCallback = function() {
    alert("history");
}