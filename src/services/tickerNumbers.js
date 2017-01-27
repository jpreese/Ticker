var soap = require('jquery.soap');
var parseString = require('xml2js').parseString;

getTickerInfoAsJSON = function(symbol) {

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
            parseString(soapResponse, function (err, result) {
                return result;
            });
        },
        
        error: function (SOAPResponse) {
            console.log("err: " + SOAPResponse)
        }
    });    
}

module.exports = getTickerInfoAsJSON;