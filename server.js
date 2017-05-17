var express = require('express');
var api = require('./api');
var app = express();

 var cursos = function(res,data){

res.write(JSON.stringify(data));
res.end();
  }


var logged = function(res,data){
cookie = data.headers['set-cookie']
api.datos(res,cookie,cursos);

}



app.get('/login', function (req, res) {
  var user_id = req.param('rut');
  var token = req.param('pass');
var login = function(salt,cookie){
 api.login(res,user_id,token,salt,cookie,logged);
};
api.salt(res,login);

});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

