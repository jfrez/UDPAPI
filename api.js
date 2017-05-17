var http = require('http');

var jsdom = require("jsdom");
var querystring = require('querystring');
 var { JSDOM } = jsdom;
   var { window } = new JSDOM();
   var JQ = require("jquery")(window);
var $ = JQ;

exports.salt = function(response,callback,dat) {
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
callback($(data).find("input[name=j_salt]").val(),setcookie,dat); // binary is your data
}
}

request(options, call);


};
exports.login = function(response,user,pass,salt,cookie,callback,datos) {
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
var options = {
    url: 'http://portal.udp.cl/irj/portal',
    method: 'POST',
    headers: headers,
    body: dataString
};

function call(error, res, body) {

callback(response,res,datos); // binary is your data
}
request(options, call);

};
exports.datos = function(response,Cookie,callback,dat) {
var request = require('request');

var headers = {
    'Origin': 'http://portal.udp.cl',
    'Accept-Encoding': ' deflate',
    'Accept-Language': 'es-419,es;q=0.8',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Cache-Control': 'max-age=0',
    'Referer': 'http://portal.udp.cl/irj/servlet/prt/portal/prteventname/Navigate/prtroot/pcd!3aportal_content!2fevery_user!2fgeneral!2fdefaultAjaxframeworkContent!2fcom.sap.portal.contentarea?HistoryMode=2&windowId=WID1495000471394&NavMode=0&PrevNavTarget=navurl%3A%2F%2F73123621b8341c30a4d2aefff9ba0892',
    'Connection': 'keep-alive',
    'Cookie': decodeURIComponent(Cookie[0])};

var dataString = 'sap-ext-sid=Qpb8zKcmmGBbeGQSF4dEaQ--WpknMQozTxk4VxwqbE4XZg--&sap-wd-cltwndid=WID1495000471394&sap-wd-tstamp=1495001307384&PagePath=pcd%3Aportal_content%2Fpc_udp%2Fstudents%2FUDP_student%2Fportal_st_udp%2Fst_mydata%2Fhome%2FMyDataApp&sap-wd-app-namespace=zzzz&sap-ep-version=7.40.201304112106&sap-locale=es_419&sap-accessibility=&sap-rtl=&sap-explanation=null&sap-cssurl=http%3A%2F%2Fportal.udp.cl%3A80%2Fcom.sap.portal.design.urdesigndata%2Fthemes%2Fportal%2Fudp_gray%2Fls%2Fls_sf3.css%3Fv%3D7.33.3.24.1&sap-cssversion=7.33.3.24.0&sap-epcm-guid=4E93D24EBE27DF20133AF3D62D46401BBA6A632FE4A48FAF43E1A8BDDBF69B7C&com.sap.portal.reserved.wd.pb.restart=false&DynamicParameter=&SerWinIdString=%26&NavigationTarget=pcd%3Aportal_content%2Fpc_udp%2Fstudents%2FUDP_student%2Fportal_st_udp%2Fst_mydata%2Fhome&NavMode=0&HistoryMode=2&PrevNavTarget=navurl%3A%2F%2F73123621b8341c30a4d2aefff9ba0892';

var options = {
    url: 'http://portal.udp.cl/webdynpro/resources/sap.com/pb/PageBuilder;jsessionid=M4HzGgb5RCD3Mdu0xcOtsQFlKDMUXAG3bWMA_SAP',
    method: 'POST',
    headers: headers,
    body: dataString
};

function call(error, res, body) {
    if (!error && res.statusCode == 200) {

    datos = {}
    datos.nombre  =$(body).find("input[id='aaaa.MyDataCompView.First_Name']").val()
    datos.apellido  =$(body).find("input[id='aaaa.MyDataCompView.Last_Name']").val()
    datos.ingreso  =$(body).find("span[id='aaaa.MyDataCompView.yearperid_editor.0']").text();
    datos.ranking_escuela  =$(body).find("span[id='aaaa.MyDataCompView.posicionescuela_editor.0']").text();

    datos.ranking_u  =$(body).find("span[id='aaaa.MyDataCompView.rankingcarrera_editor.0']").text();

    datos.promedio  =$(body).find("span[id='aaaa.MyDataCompView.promedio_editor.0']").text().replace(/\D/g,'');;

    datos.estado  =$(body).find("span[id='aaaa.MyDataCompView.estado_editor.0']").text();
    datos.carrera =$(body).find("input[id='aaaa.MyDataCompView.ToolBarDropDownByIndex']").val();
dat.datos = datos;
callback(response,datos,Cookie,dat);



    }
}

request(options, call);

};



exports.cursos = function(response,Cookie,callback,dat) {
var request = require('request');

var headers = {
    'Origin': 'http://portal.udp.cl',
    'Accept-Encoding': ' deflate',
    'Accept-Language': 'es-419,es;q=0.8',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Cache-Control': 'max-age=0',
    'Referer': 'http://portal.udp.cl/irj/servlet/prt/portal/prteventname/Navigate/prtroot/pcd!3aportal_content!2fevery_user!2fgeneral!2fdefaultAjaxframeworkContent!2fcom.sap.portal.contentarea?HistoryMode=2&windowId=WID1495000471394&NavMode=0&PrevNavTarget=navurl%3A%2F%2F73123621b8341c30a4d2aefff9ba0892',
    'Connection': 'keep-alive',
    'Cookie': decodeURIComponent(Cookie[0])};

var dataString='sap-ext-sid=PfRKuP5AYjSIBYcu*PopCA--q6n*7DWrfdDOiJuP8fwVsg--&sap-wd-cltwndid=WID1495039959849&sap-wd-tstamp=1495040805588&PagePath=pcd%3Aportal_content%2Fpc_udp%2Fstudents%2FUDP_student%2Fportal_st_udp%2Fst_mycourses%2FMisDocumentos%2FDocApp_3&sap-wd-app-namespace=zzzz&sap-ep-version=7.40.201304112106&sap-locale=es&sap-accessibility=&sap-rtl=&sap-explanation=null&sap-cssurl=http%3A%2F%2Fportal.udp.cl%3A80%2Fcom.sap.portal.design.urdesigndata%2Fthemes%2Fportal%2Fudp_gray%2Fls%2Fls_sf3.css%3Fv%3D7.33.3.24.1&sap-cssversion=7.33.3.24.0&sap-epcm-guid=4E93D24EBE27DF20133AF3D62D46401BA1624A7DBADF381E5C2F2DC768EEB2A3&com.sap.portal.reserved.wd.pb.restart=false&DynamicParameter=&SerWinIdString=%26&NavigationTarget=navurl%3A%2F%2Fe11aac6d4c554fca1547c281953a6694&NavMode=0&ExecuteLocally=true&CurrentWindowId=WID1495039959849&PrevNavTarget=navurl%3A%2F%2Fe11aac6d4c554fca1547c281953a6694';
var options = {
    url: 'http://portal.udp.cl/webdynpro/resources/sap.com/pb/PageBuilder;jsessionid=O1AZzq2P74AI0YMJNTa0rGMp5HESXAHrwjkA_SAP',
    method: 'POST',
    headers: headers,
    body: dataString
};

function call(error, res, body) {
    if (!error && res.statusCode == 200) {
    datos = []
var str= '<td class="urIlb2I urColorTxtStandard">';
		var len = str.length;
	var start=body.indexOf(str);
	var end=body.indexOf('</td>',start);
	while(start >0){
	 start=body.indexOf(str,end);
	 end=body.indexOf('</td>',start);
	var code= body.substring(start+len, end);
	if(code.length >6 && code.length <13){
		datos.push(code);
	}
	}	
dat.cursos=datos;
/*
    datos.nombre  =$(body).find("input[id='aaaa.MyDataCompView.First_Name']").val()
    datos.apellido  =$(body).find("input[id='aaaa.MyDataCompView.Last_Name']").val()
    datos.ingreso  =$(body).find("span[id='aaaa.MyDataCompView.yearperid_editor.0']").text();
    datos.ranking_escuela  =$(body).find("span[id='aaaa.MyDataCompView.posicionescuela_editor.0']").text();

    datos.ranking_u  =$(body).find("span[id='aaaa.MyDataCompView.rankingcarrera_editor.0']").text();

    datos.promedio  =$(body).find("span[id='aaaa.MyDataCompView.promedio_editor.0']").text().replace(/\D/g,'');;

    datos.estado  =$(body).find("span[id='aaaa.MyDataCompView.estado_editor.0']").text();
    datos.carrera =$(body).find("input[id='aaaa.MyDataCompView.ToolBarDropDownByIndex']").val();
*/
callback(response,dat);



    }
}

request(options, call);

};
