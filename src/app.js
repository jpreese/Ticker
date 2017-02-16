var getQuote = require('./services/getQuote.js');

var searchControl = document.getElementById("searchTicker");
searchControl.onclick = function() {
    getQuote("ATVI", searchTickerCallback);
}

var searchTickerCallback = function(result) {
    console.log(result);
}