var http = require('http');

var jsdom = require("jsdom");
var querystring = require('querystring');
 var { JSDOM } = jsdom;
   var { window } = new JSDOM();
   var JQ = require("jquery")(window);
var $ = JQ;

exports.salt = function(response,callback) {
var request = require('request');

var headers = {
    'Origin': 'http://portal.udp.cl',
    'Accept-Language': 'es-ES,es;q=0.8',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Cache-Control': 'max-age=0',
    'Referer': 'http://portal.udp.cl/irj/portal',
    'Connection': 'keep-alive'
};
var options = {
    url: 'http://portal.udp.cl/irj/portal',
    method: 'GET',
    headers: headers
};

function call(error, res, data) {
        if (!error && res.statusCode == 200) {

data=data.toString('utf8');
var setcookie =res.headers['set-cookie'];	
callback($(data).find("input[name=j_salt]").val(),setcookie); // binary is your data
}
}

request(options, call);


};
exports.login = function(response,user,pass,salt,cookie,callback) {
var request = require('request');

var headers = {
    'Origin': 'http://portal.udp.cl',
    'Accept-Language': 'es-ES,es;q=0.8',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Cache-Control': 'max-age=0',
    'Referer': 'http://portal.udp.cl/irj/portal',
    'Connection': 'keep-alive',
    'Cookie':cookie
};
var dat={
login_submit:"on",
login_do_redirect:1,
no_cert_storing:"on",
j_salt:salt,
j_username:user,
j_password:pass,
uidPasswordLogon:"Entrar al sistema"
}
var dataString = querystring.stringify(dat);
console.log(dataString);
var options = {
    url: 'http://portal.udp.cl/irj/portal',
    method: 'POST',
    headers: headers,
    body: dataString
};

function call(error, res, body) {
callback(response,res.statusCode); // binary is your data
}
request(options, call);

};
