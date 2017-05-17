var express = require('express');
var api = require('./api');
var app = express();

var getcodigo=function(res,data,curso){
if(curso>data.cursos.length-1){
res.write(JSON.stringify(data));
res.end();
}else{
api.curso(res,cookie,getcodigo,curso,data);
}
}

 var printall = function(res,data){
data.cursos[0].status=false;
api.curso(res,cookie,getcodigo,0,data);

}
 var cursos = function(res,data,cookie,dat){
 
api.cursos(res,cookie,printall,dat);
  }


var logged = function(res,data,dat){
cookie = data.headers['set-cookie']
dat.cookie=cookie;
api.datos(res,cookie,cursos,dat);

}



app.get('/', function (req, res) {
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

