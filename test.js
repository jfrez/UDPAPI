var api = require('./api');
var res="";
  var user_id = "180206779";
  var token = "mmae2010";

var logged = function(res,data){
console.log(data);
}

var login = function(salt,cookie){
 api.login(res,user_id,token,salt,cookie,logged);
};

api.salt(res,login);



