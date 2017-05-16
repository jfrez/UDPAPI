var http = require('http');
var jsdom = require("jsdom");
var querystring = require('querystring');
 var { JSDOM } = jsdom;
   var { window } = new JSDOM();
   var JQ = require("jquery")(window);
var $ = JQ;
var headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Connection': 'keep-alive',
    'Referer': 'http://portal.udp.cl/irj/portal',
    'origin': 'http://portal.udp.cl/',
    'Host': 'portal.udp.cl',
    'Accept-Language': 'es,en-US;q=0.8,en;q=0.6,it;q=0.4',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
};

exports.salt = function(response,callback) {
var options = {
  host: 'portal.udp.cl',
  path: '/irj/portal',
  headers:headers
};
req = http.request(options, function(res) {
   // res.setEncoding('binary');
    var data = "";

    res.on('data', function(chunk) {
	chunk = chunk.toString('utf8');
        data += chunk;
       
    });
    res.on('end', function() {
	  var setcookie = res.headers["set-cookie"];
	callback($(data).find("input[name=j_salt]").val(),setcookie); // binary is your data
    });
    res.on('error', function(err) {
        console.log("Error during HTTP request");
    });
}).end();

};
exports.login = function(response,user,pass,salt,cookie,callback) {
var post_data ='login_submit=on&login_do_redirect=1&no_cert_storing=on&uidPasswordLogon=Entrar al sistema&j_salt='+salt+'&j_username='+user+'&j_password'+pass;
  
headers['Content-Length']= Buffer.byteLength(post_data);
headers['Cookie']= cookie;
var options = {
  host: 'portal.udp.cl',
  path: '/irj/portal',
  headers:headers,
};
console.log("options: "+JSON.stringify(options)+"\n");
console.log("post: "+JSON.stringify(post_data)+"\n");
req = http.request(options, function(res) {
   // res.setEncoding('binary');
    var data = "";

    res.on('data', function(chunk) {
	chunk = chunk.toString('utf8');
        data += chunk;
    });
    res.on('end', function() {
	callback(response,res.statusCode); // binary is your data
    });
    res.on('error', function(err) {
        console.log("Error during HTTP request");
        console.log(err.message);
    });
});
 req.write(post_data);
console.log(post_data);
 req.end();

};
