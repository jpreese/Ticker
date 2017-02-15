var soap = require('jquery.soap');

var getTickerInfoAsJson = function(ticker, callback) {

    soap({
        url: 'http://www.webservicex.net/stockquote.asmx',
        method: 'GetQuote',
        soap12: true,
        appendMethodToURL: false,
        
        envAttributes: {
            'xmlns': 'http://www.webserviceX.NET/'
        },

        data: {
            symbol: ticker,
        },

        }).done(function(soapResponse) {
            console.log(serializeXml(soapResponse));
        }).fail(function(soapResponse) {
            console.log("failure: " + soapResponse)
        }); 
}

function serializeXml(doc) {
    var serializer = new XMLSerializer();
    var serializedXml = serializer.serializeToString(doc);
    
    return serializedXml.replace(/&lt;/g,'<').replace(/&gt;/g,'>');
}

module.exports = getTickerInfoAsJson;