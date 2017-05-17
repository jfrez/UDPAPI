var api = require('./api');
var res="";
  var user_id = "180206779";
  var token = "mmae2010";


  var cursos = function(data){

  	console.log(data)
  }

var logged = function(res,data){


if (data.statusCode == 302)
{

console.log("logeado");
cookie = data.headers['set-cookie']
//api.datos(cookie);
api.datos(cookie,cursos);



}

}

var login = function(salt,cookie){
 api.login(res,user_id,token,salt,cookie,logged);
};

api.salt(res,login);



