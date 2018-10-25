var cheerio = require("cheerio");
var request = require("request");

console.log("n***************************************\n" +
                "Grabbing every thread name link\n" +
                "from SBNation:" + 
                "\n**********************************\n");

request
request("https://www.celticsblog.com/2018/8/23/17752368/rap-hip-hop-jayson-tatum-gucci-mane-boston-celtics-basketball-nba-lebron-james-michael-jordan", function(error, response, html) {

var $ = cheerio.load(html);

var results = [];

// Grabbing from SB Nation
$("section.1-wrapper").each(function (i, element) {
    var summary = $(element).find("h2.c-entry-summary").text();

    results.push(summary);

});

console.log(results);

});