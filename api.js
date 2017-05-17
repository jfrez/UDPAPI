var http = require('http');
var jsdom = require("jsdom");
var querystring = require('querystring');
 var { JSDOM } = jsdom;
   var { window } = new JSDOM();
   var JQ = require("jquery")(window);
var $ = JQ;

exports.salt = function(response,callback) {
var options = {
hostname:'portal.udp.cl',
path:'/irj/portal' 
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

 var post_data=querystring.stringify({
login_submit:'on',
login_do_redirect:1,
j_salt:salt,
uidPasswordLogon:"Entrar al sistema",
j_username:user,
j_password:pass
});

headers['Cookie']= cookie.join(";");
headers['Content-Length']=Buffer.byteLength(post_data);


var options = {
      method: 'POST',
hostname:'portal.udp.cl',
path:'/irj/portal',  
   form:post_data,
  headers:headers,
};
req = http.request(options, function(res) {
    var data = "";
console.log(res);

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
 req.end();

};
