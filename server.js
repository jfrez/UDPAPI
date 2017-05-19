var express = require('express');
var api = require('./api');
var app = express();

var getcodigo=function(res,data,curso){
console.log(curso);
if(curso>data.cursos.length-1){
res.write(JSON.stringify(data));
res.end();
}else{
api.curso(res,cookie,getcodigo,curso+1,data);
}

}

 var printallprof = function(res,data,cookie){
res.write(JSON.stringify(data));
res.end();
}
 var printall = function(res,data,cookie){
console.log("EXT " + data.sapextsid);
res.write(JSON.stringify(data));
res.end();

//api.curso(res,cookie,getcodigo,0,data);
}
 var cursos = function(res,data,cookie,dat){
console.log("EXT " + dat.sapextsid);
api.cursos(res,cookie,printall,dat);
  }

 var cursosprof = function(res,data,cookie,dat){
api.cursosprof(res,cookie,printallprof,dat);
  }
 var profesor = function(res,data,cookie,dat){
api.datosprof(res,cookie,cursosprof,dat);
  }
 var splitter = function(res,cookie,dat){
console.log(dat);
console.log(cookie);
api.datos(res,cookie,cursos,dat,profesor);
  }
var logged = function(res,data,dat,cookie){
console.log("EXT " + dat.sapextsid);
if((data.statusCode)!= 302){
res.write(JSON.stringify({status:false}));
res.end();
}else{
dat.status=true;
console.log("logged");
api.sapextid(res,cookie,splitter,dat);
}
}



app.get('/', function (req, res) {
  var user_id = req.param('rut');
  var token = req.param('pass');
var dat = {};
dat.rut = user_id;

var login = function(salt,cookie,dat){
console.log("EXT " + dat.sapextsid);
 api.login(res,user_id,token,salt,cookie,logged,dat);
};
api.salt(res,login,dat);

});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

