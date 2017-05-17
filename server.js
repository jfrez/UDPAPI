var express = require('express');
var api = require('./api');
var app = express();

 var printall = function(res,data){

res.write(JSON.stringify(data));
res.end();

}
 var cursos = function(res,data,cookie,dat){

//res.write(JSON.stringify(data));
 
api.cursos(res,cookie,printall,dat);
  }


var logged = function(res,data,dat){
cookie = data.headers['set-cookie']
dat.cookie=cookie;
api.datos(res,cookie,cursos,dat);

}



app.get('/login', function (req, res) {
  var user_id = req.param('rut');
  var token = req.param('pass');
var dat = {};
dat.rut = user_id;

var login = function(salt,cookie,dat){
dat.salt=salt;
dat.cookie=cookie;
 api.login(res,user_id,token,salt,cookie,logged,dat);
};
api.salt(res,login,dat);

});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

