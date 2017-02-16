var soap = require('jquery.soap');

var getQuoteAsJson = function(ticker, callback) {

    soap({
        url: 'http://ws.cdyne.com/delayedstockquote/delayedstockquote.asmx',
        method: 'GetQuote',
        soap12: true,
        appendMethodToURL: false,
        
        envAttributes: {
            'xmlns': 'http://ws.cdyne.com/'
        },

        data: {
            StockSymbol: ticker,
            LicenseKey: 0
        },

        }).done(function(soapResponse) {
            callback(xmlToJson(soapResponse));
        }).fail(function(soapResponse) {
            console.log("failure: " + soapResponse)
        }); 
}

var xmlToJson = function(doc) {

    var stockSymbol = doc.getElementsByTagName("StockSymbol")[0].childNodes[0].nodeValue;
    var lastTradeAmount = doc.getElementsByTagName("LastTradeAmount")[0].childNodes[0].nodeValue;
    
    var data = { 
        "StockSymbol": stockSymbol, 
        "LastTradeAmount": lastTradeAmount 
    };
    
    return data;
}

module.exports = getQuoteAsJson;