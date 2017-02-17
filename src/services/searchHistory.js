var $ = require('jquery');
var baseUrl = "http://localhost:51764/api/History/";

var addHistory = function(search) {
    
    $.ajax({
       url: baseUrl,
       type: 'POST',
       data: {entry: search},
       success: callback
    });
    
};

var getHistory = function(callback) {
    
    $.ajax({
        url: baseUrl,
        type: 'GET',
        success: callback
    });
    
};

module.exports = { 
    addHistory: addHistory, 
    getHistory: getHistory 
};