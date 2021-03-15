var http = require("http");
var rb = require("random-bool");
const { promisify } = require('util')
const sleep = promisify(setTimeout)

var server = http.createServer(function (req, res)
{
    //payment card or sensitive data processing logic
    sleep(2000).then(() => {
    console.log("Processing txn...");    
        if(rb()) {
            res.end("Transaction processed successfully.");
            console.log("Success");
        } else {
            res.end("Transaction failed.");
            console.log("Failure");
        }
    });
});

server.listen(3000);

process.once('SIGTERM', function () {
    server.close();
});