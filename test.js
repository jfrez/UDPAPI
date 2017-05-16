var api = require('./api');
var res="";
var logged = function(res,data){
console.log(data);
}
  var user_id = "180206679";
  var token = "mmalba2010";
var login = function(salt,cookie){
 api.login(res,user_id,token,salt,cookie,logged);
};
api.salt(res,login);



