var soap = require('jquery.soap');
var $ = require('jquery');

var getTickerInfoAsJsonImpl = function(symbol, callback) {

    soap({
        url: 'http://www.webservicex.net/stockquote.asmx',
        method: 'GetQuote',
        soap12: true,
        appendMethodToURL: false,
        
        envAttributes: {
            'xmlns': 'http://www.webserviceX.NET/'
        },

        data: {
            symbol: symbol
        },

        success: function (soapResponse) {
            soapResponse = soapResponse.toString().replace(/&lt;/g,'<').replace(/&gt;/g,'>');
            callback(soapResponse);
        },
        
        error: function (soapResponse) {
            console.log("po: " + soapResponse)
        }
    });    
}

var getTickerInfoAsJson = function(symbol) {
    var tickerInfo;
    
    getTickerInfoAsJsonImpl(symbol, function(result) {
        tickerInfo = result;
    });
    
    return tickerInfo;
}

module.exports = getTickerInfoAsJson;