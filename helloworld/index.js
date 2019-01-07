var http = require("http");
var server = http.createServer(function(rep,res){

    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("hello,nodejs");
    res.end();

});
server.listen(3000,function(){
    console.log("hello,nodejs");
});