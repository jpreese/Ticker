var $ = require('jquery');

var getLogo = function(ticker, callback) {
    
    var API_KEY = 'BA26D81D5547404795B721799B0ACB28';
    var data = 'IdentifierType=Symbol&Identifier=' + ticker + '&_Token=' + API_KEY 
    
    $.ajax({
       url: "http://www.xignite.com/xLogos.xml/GetLogo",
       type: 'GET',
       data: data,
       success: callback
    });
};

module.exports = getLogo;