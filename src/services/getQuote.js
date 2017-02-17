var $ = require('jquery');
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

    var companyName = $(doc).find("CompanyName").text();
    var openAmount = $(doc).find("OpenAmount").text();
    var dayHigh = $(doc).find("DayHigh").text();
    var dayLow = $(doc).find("DayLow").text();
    
    var data = { 
        "CompanyName": companyName, 
        "OpenAmount": openAmount,
        "DayHigh": dayHigh,
        "DayLow": dayLow 
    };
    
    return data;
}

module.exports = getQuoteAsJson;