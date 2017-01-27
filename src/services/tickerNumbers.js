var soap = require('jquery.soap');

soap({
    url: 'http://www.webservicex.net/stockquote.asmx',
    method: 'GetQuote',
    soap12: true,
    appendMethodToURL: false,
    
    envAttributes: {
        'xmlns': 'http://www.webserviceX.NET/'
    },

    data: {
        symbol: 'ATVI'
    },

    success: function (soapResponse) {
        console.log(soapResponse)
    },
    
    error: function (SOAPResponse) {
        console.log("poo: " + SOAPResponse)
    }
});