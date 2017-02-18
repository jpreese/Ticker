var $ = require('jquery');
var getQuote = require('./services/getQuote.js');
var getLogo = require('./services/getLogo.js');
var searchHistory = require('./services/searchHistory.js');

$(document).ready(function() {
    searchHistory.getHistory(getHistoryCallback);
    
    $("#searchControl").click(function() {
        var tickerInputValue = $("#tickerInput").val();
        getQuote(tickerInputValue, tickerInfoCallback);
        getLogo(tickerInputValue, logoCallback);
        
        resetUI();
    });
    
});

var tickerInfoCallback = function(result) {
    $("#companyName").text(result.CompanyName);
    $("#openValue").text(result.OpenAmount);
    $("#highValue").text(result.DayHigh);
    $("#lowValue").text(result.DayLow);

    searchHistory.addHistory(result.CompanyName, addHistoryCallback);
}

var logoCallback = function(result) {
    var logoUrl = $(result).find("URL").text();
    $("#logo").attr("src", logoUrl);
}

var getHistoryCallback = function(history) {
    var previousSearches = $("#previousSearches");

    previousSearches.html("");
    
    $.each(history, function(index, value){
        previousSearches.html(previousSearches.html() + '<li>' + value.Ticker +'</li>')
    });
}

var addHistoryCallback = function() {
    searchHistory.getHistory(getHistoryCallback);
}

var resetUI = function() {
    $("#tickerInput").val("");
    $("#tickerInput").focus();
}

module.exports = tickerInfoCallback;