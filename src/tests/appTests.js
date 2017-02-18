require('jsdom-global')();

var assert = require('assert');
var tickerInfoCallback = require('../app.js');
var $ = require('jquery');


describe('Ticker Information Display', function() {
    
    before(function() {
        $("body").append("<span id='companyName'></span>")
        $("body").append("<span id='openValue'></span>")
        $("body").append("<span id='highValue'></span>")
        $("body").append("<span id='lowValue'></span>")
    });
    
    it('Ticker information should be set after callback', function() {
        
        var data = {
            CompanyName: "MyCompany",
            OpenAmount: 10,
            DayHigh: 20,
            DayLow: 0
        };
        
        tickerInfoCallback(data);
        
        assert.equal($("#companyName").text(), data.CompanyName);
        assert.equal($("#openValue").text(), data.OpenAmount);
        assert.equal($("#highValue").text(), data.DayHigh);
        assert.equal($("#lowValue").text(), data.DayLow);
    });
});