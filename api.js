var http = require('http');

var jsdom = require("jsdom");
var querystring = require('querystring');
 var { JSDOM } = jsdom;
   var { window } = new JSDOM();
   var JQ = require("jquery")(window);
var $ = JQ;
function str_obj(str) {
    str = str.split(', ');
    var result = {};
    for (var i = 0; i < str.length; i++) {
        var cur = str[i].split('=');
        result[cur[0]] = cur[1];
    }
    return result;
}

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
callback($(data).find("input[name=j_salt]").val(),null,dat); // binary is your data
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
var cookie =res.headers['set-cookie'];
var JSESSIONID = (str_obj(cookie[3]).JSESSIONID);
JSESSIONID=JSESSIONID.substring(0,JSESSIONID.indexOf(";"));
datos.JSESSIONID=JSESSIONID;
var MYSAPSSO2 = (str_obj(cookie[0]).MYSAPSSO2);
MYSAPSSO2=MYSAPSSO2.substring(0,MYSAPSSO2.indexOf(";"));
datos.MYSAPSSO2=MYSAPSSO2;
var JSESSIONMARKID = (str_obj(cookie[4]).JSESSIONMARKID);
JSESSIONMARKID=JSESSIONMARKID.substring(0,JSESSIONMARKID.indexOf(";"));
datos.JSESSIONMARKID=JSESSIONMARKID;
//var id = (Cookie[1]).substring(1+Cookie[1].indexOf("="), Cookie[1].indexOf(";"));
callback(response,res,datos,cookie); // binary is your data
}
request(options, call);

};


exports.sapextid= function(response,Cookie,callback,dat){
var request = require('request');

var headers = {
    'Origin': 'http://portal.udp.cl',
    'Accept-Language': 'es,en-US;q=0.8,en;q=0.6,it;q=0.4',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Cache-Control': 'max-age=0',
    'Referer': 'http://portal.udp.cl/irj/portal',
    'Connection': 'keep-alive',
    'Cookie': decodeURIComponent(Cookie[0])};

var dataString = 'NavigationTarget=ROLES%3A%2F%2Fportal_content%2Fpc_udp%2Fstudents%2FUDP_student%2Fportal_st_udp%2Fst_mydata%2FAvisosApp';

var options = {
    url:'http://portal.udp.cl/irj/servlet/prt/portal/prteventname/Navigate/prtroot/pcd!3aportal_content!2fevery_user!2fgeneral!2fdefaultAjaxframeworkContent!2fcom.sap.portal.contentarea?windowId=WID1495231899808',
	method: 'POST',
    headers: headers,
    body: dataString
};

function call(error, res, body) {
        if ( res.statusCode == 200) {
dat.sapextsid = $(body).find("input[name=sap-ext-sid]").val();
dat.sapwdcltwndid = $(body).find("input[name=sap-wd-cltwndid]").val();
dat.sapwdtstamp = $(body).find("input[name=sap-wd-tstamp]").val();
dat.sapepcmguid = $(body).find("input[name=sap-epcm-guid]").val();
callback(response,Cookie,dat);
}
}

request(options, call);

};
exports.datosprof = function(response,Cookie,callback,dat) {
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
var dataString='sap-ext-sid='+(dat.sapextsid)+'&sap-wd-cltwndid=WID1495224632118&sap-wd-tstamp=1495224452449&PagePath=pcd%3Aportal_content%2Fpc_udp%2Finstructors%2FUDP_teacher%2Fportal_in_udp%2Fst_mycourses%2FMisDocumentos%2FDocApp_2_2&sap-wd-app-namespace=zzzz&sap-ep-version=7.40.201304112106&sap-locale=es&sap-accessibility=&sap-rtl=&sap-explanation=null&sap-cssurl=http%3A%2F%2Fportal.udp.cl%3A80%2Fcom.sap.portal.design.urdesigndata%2Fthemes%2Fportal%2Fudp_gray%2Fls%2Fls_sf3.css%3Fv%3D7.33.3.24.1&sap-cssversion=7.33.3.24.0&sap-epcm-guid=4E93D24EBE27DF20133AF3D62D46401BA1624A7DBADF381E5C2F2DC768EEB2A3&com.sap.portal.reserved.wd.pb.restart=false&DynamicParameter=&SerWinIdString=%26&NavigationTarget=navurl%3A%2F%2F00dbcfec6d2c181d1b767f80247e7e45&NavMode=0&ExecuteLocally=true&CurrentWindowId=WID1495224632118&PrevNavTarget=navurl%3A%2F%2F00dbcfec6d2c181d1b767f80247e7e45';
var options = {
    url: 'http://portal.udp.cl/webdynpro/resources/sap.com/pb/PageBuilder;jsapextsid=u_YmYVJIseyoOvJ3UK7hsL_WmHAUXAHrwjkA_SAP',
    method: 'POST',
    headers: headers,
    body: dataString
};

function call(error, res, body) {
    if (!error && res.statusCode == 200) {

    datos = {}
    datos.nombre  =$(body).find("input[id='aaaa.MyPersDataCompView.Name']").val();
    datos.type  ="Prof"
    datos.email  =$(body).find("input[id='aaaa.MyPersDataCompView.Email']").val();
    datos.facultad  =$(body).find("input[id='aaaa.MyPersDataCompView.Nameofpersarea']").val();
    datos.unidad  =$(body).find("input[id='aaaa.MyPersDataCompView.Nameoforgunit']").val();
dat.datos = datos;
var Cookie =res.headers['set-cookie'];	
callback(response,datos,Cookie,dat);


    }
}

request(options, call);

};


exports.datos = function(response,Cookie,callback,dat,profesor) {
var request = require('request');
var headers = {
    'Origin': 'http://portal.udp.cl',
    'Host':'portal.udp.cl',
    'Accept-Language': 'es-419,es;q=0.8',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive',
    'Referer':'Referer:http://portal.udp.cl/irj/servlet/prt/portal/prteventname/Navigate/prtroot/pcd!3aportal_content!2fevery_user!2fgeneral!2fdefaultAjaxframeworkContent!2fcom.sap.portal.contentarea?windowId=WID1495229086985',
    'Cookie': decodeURIComponent(Cookie[0])};
var dataString='sap-ext-sid='+encodeURIComponent(dat.sapextsid)+'&sap-wd-cltwndid=WIDWID1495229086985&sap-wd-tstamp='+dat.sapwdtstamp+'&PagePath=pcd%3Aportal_content%2Fpc_udp%2Fstudents%2FUDP_student%2Fportal_st_udp%2Fst_mydata%2Fhome%2FMyDataApp&sap-wd-app-namespace=zzzz&sap-ep-version=7.40.201304112106&sap-locale=es&sap-accessibility=&sap-rtl=&sap-explanation=null&sap-cssurl=http%3A%2F%2Fportal.udp.cl%3A80%2Fcom.sap.portal.design.urdesigndata%2Fthemes%2Fportal%2Fudp_gray%2Fls%2Fls_sf3.css%3Fv%3D7.33.3.24.1&sap-cssversion=7.33.3.24.0&sap-epcm-guid=4E93D24EBE27DF20133AF3D62D46401BA1624A7DBADF381E5C2F2DC768EEB2A3&com.sap.portal.reserved.wd.pb.restart=false&DynamicParameter=&SerWinIdString=%26&NavigationTarget=pcd%3Aportal_content%2Fpc_udp%2Fstudents%2FUDP_student%2Fportal_st_udp%2Fst_mydata%2Fhome&NavMode=0&HistoryMode=2&PrevNavTarget=navurl%3A%2F%2F73123621b8341c30a4d2aefff9ba0892';
var options = {
    url: 'http://portal.udp.cl/webdynpro/resources/sap.com/pb/PageBuilder',
    method: 'POST',
    headers: headers,
    body: dataString
};

function call(error, res, body) {
dat.sapwdsecureid = $(body).find("input[name=sap-wd-secure-id]").val();
    if (!error && res.statusCode == 200) {
    datos = {}
    datos.nombre  =$(body).find("input[id='aaaa.MyDataCompView.First_Name']").val()
    datos.type  ="Alum";
    datos.apellido  =$(body).find("input[id='aaaa.MyDataCompView.Last_Name']").val()
    datos.ingreso  =$(body).find("span[id='aaaa.MyDataCompView.yearperid_editor.0']").text();
    datos.ranking_escuela  =$(body).find("span[id='aaaa.MyDataCompView.posicionescuela_editor.0']").text();

    datos.ranking_u  =$(body).find("span[id='aaaa.MyDataCompView.rankingcarrera_editor.0']").text();

    datos.promedio  =$(body).find("span[id='aaaa.MyDataCompView.promedio_editor.0']").text().replace(/\D/g,'');;

    datos.estado  =$(body).find("span[id='aaaa.MyDataCompView.estado_editor.0']").text();
    datos.carrera =$(body).find("input[id='aaaa.MyDataCompView.ToolBarDropDownByIndex']").val();
dat.datos = datos;
if(datos.nombre.length>0){
callback(response,datos,Cookie,dat);
}else{
profesor(response,datos,Cookie,dat);
}

    }
}

request(options, call);

};


exports.cursosprof = function(response,Cookie,callback,dat) {
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

var dataString='sap-ext-sid='+encodeURIComponent(dat.sapextsid)+'&sap-wd-cltwndid=WID1495224632118&sap-wd-tstamp=1495224452449&PagePath=pcd%3Aportal_content%2Fpc_udp%2Finstructors%2FUDP_teacher%2Fportal_in_udp%2Fst_mycourses%2FMisDocumentos%2FDocApp_2_2&sap-wd-app-namespace=zzzz&sap-ep-version=7.40.201304112106&sap-locale=es&sap-accessibility=&sap-rtl=&sap-explanation=null&sap-cssurl=http%3A%2F%2Fportal.udp.cl%3A80%2Fcom.sap.portal.design.urdesigndata%2Fthemes%2Fportal%2Fudp_gray%2Fls%2Fls_sf3.css%3Fv%3D7.33.3.24.1&sap-cssversion=7.33.3.24.0&sap-epcm-guid=4E93D24EBE27DF20133AF3D62D46401BA1624A7DBADF381E5C2F2DC768EEB2A3&com.sap.portal.reserved.wd.pb.restart=false&DynamicParameter=&SerWinIdString=%26&NavigationTarget=navurl%3A%2F%2F00dbcfec6d2c181d1b767f80247e7e45&NavMode=0&ExecuteLocally=true&CurrentWindowId=WID1495224632118&PrevNavTarget=navurl%3A%2F%2F00dbcfec6d2c181d1b767f80247e7e45';
var options = {
    url: 'http://portal.udp.cl/webdynpro/resources/sap.com/pb/PageBuilder;jsapextsid=O1AZzq2P74AI0YMJNTa0rGMp5HESXAHrwjkA_SAP',
    method: 'POST',
    headers: headers,
    body: dataString
};

function call(error, res, body) {
var Cookie =res.headers['set-cookie'];	
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
		datos.push({cod:code,id:null});
	}
	}	
dat.cursos=datos;
callback(response,dat);
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
    'Cookie': decodeURIComponent(Cookie)};


dataString='sap-ext-sid='+encodeURIComponent(dat.sapextsid)+'&sap-wd-cltwndid='+dat.sapwdcltwndid+'&sap-wd-tstamp='+encodeURIComponent(dat.sapwdtstamp)+'&PagePath=pcd%3Aportal_content%2Fpc_udp%2Fstudents%2FUDP_student%2Fportal_st_udp%2Fst_mycourses%2FMisDocumentos%2FDocApp_3&sap-wd-app-namespace=zzzz&sap-ep-version=7.40.201304112106&sap-locale=es&sap-accessibility=&sap-rtl=&sap-explanation=null&sap-cssurl=http%3A%2F%2Fportal.udp.cl%3A80%2Fcom.sap.portal.design.urdesigndata%2Fthemes%2Fportal%2Fudp_gray%2Fls%2Fls_sf3.css%3Fv%3D7.33.3.24.1&sap-cssversion=7.33.3.24.0&sap-epcm-guid='+encodeURIComponent(dat.sapepcmguid)+'&com.sap.portal.reserved.wd.pb.restart=false&DynamicParameter=&SerWinIdString=%26&NavigationTarget=navurl%3A%2F%2Fe11aac6d4c554fca1547c281953a6694&NavMode=0&ExecuteLocally=true&CurrentWindowId='+dat.sapwdcltwndid+'&PrevNavTarget=navurl%3A%2F%2Fe11aac6d4c554fca1547c281953a6694';
console.log(dataString);
var options = {
    url: 'http://portal.udp.cl/webdynpro/resources/sap.com/pb/PageBuilder;jsapextsid=O1AZzq2P74AI0YMJNTa0rGMp5HESXAHrwjkA_SAP',
    method: 'POST',
    headers: headers,
    body: dataString
};

function call(error, res, body) {
//var Cookie =res.headers['set-cookie'];	
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
		datos.push({cod:code,status:false,id:null});
	}
	}
dat.cursos=datos;
callback(response,dat,Cookie);
    }
}

request(options, call);

};

exports.curso = function(response,Cookie,callback,curso,dat) {
var request = require('request');
Cookie = 'JSESSIONID='+dat.JSESSIONID+';saplb_*=(J2EE3785420)3785451; MYSAPSSO2='+dat.MYSAPSSO2+'; JSESSIONMARKID='+dat.JSESSIONMARKID+'; PortalAlias=portal; SAPWP_active=1';

var headers = {
	'Accept':'*/*',
	'Connection':'keep-alive',
    'Host': 'portal.udp.cl',
    'Origin': 'http://portal.udp.cl',
    'Accept-Language': 'es-419,es;q=0.8',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-Requested-With':'XMLHttpRequest',
    'Referer':'http://portal.udp.cl/webdynpro/resources/sap.com/pb/PageBuilder;jJSESSIONID='+dat.JSESSIONID,
    'Cookie':Cookie};
dataString ='sap-ext-sid='+encodeURIComponent(dat.sapextsid)+'&sap-wd-cltwndid='+encodeURIComponent(dat.sapwdcltwndid)+'&sap-wd-norefresh=X&sap-wd-secure-id='+encodeURIComponent(dat.sapwdsecureid)+'&SAPEVENTQUEUE=ComboBox_Select%EE%80%82Id%EE%80%84aaaa.DocCompView.DropDownByIndex%EE%80%85Key%EE%80%84'+curso+'%EE%80%85ByEnter%EE%80%84false%EE%80%83%EE%80%82ClientAction%EE%80%84submit%EE%80%83%EE%80%82urEventName%EE%80%84COMBOBOXSELECTIONCHANGE%EE%80%83%EE%80%81Form_Request%EE%80%82Id%EE%80%84...form%EE%80%85Async%EE%80%84false%EE%80%85FocusInfo%EE%80%84%40%7B%22sFocussedId%22%3A%20%22aaaa.DocCompView.DropDownByIndex%22%7D%EE%80%85Hash%EE%80%84%EE%80%85DomChanged%EE%80%84false%EE%80%85IsDirty%EE%80%84false%EE%80%83%EE%80%82EnqueueCardinality%EE%80%84single%EE%80%83%EE%80%82%EE%80%83';
var options = {
    url:'http://portal.udp.cl/webdynpro/resources/sap.com/pb/PageBuilder',
	method: 'POST',
    headers: headers,
    body: dataString
};

function call(error, res, body) {
console.log(res.statusCode);
console.log(Cookie);
console.log(dataString);
if (!error && res.statusCode == 200) {

        var str= '<input type="text" name="CURS_CODIGO" value="';
        var len = str.length;
	var start=body.indexOf(str);
	var end=body.indexOf('" readonly>',start);
	 var code= body.substring(start+len, end);
		console.log(code);
	
	if(code.length >6 && code.length <13){
		dat.cursos[curso].id=code;
		dat.cursos[curso].status=true;
	}
//callback(response,dat,curso+1,Cookie);
    }
}

request(options, call);

};
exports.cursoprof = function(response,Cookie,callback,curso,dat) {
//NOT READY

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
    'Connection': 'keep-alive',
    'Cookie':decodeURIComponent(Cookie)};

var dataString='sap-ext-sid='+encodeURIComponent(dat.sapextsid)+'&sap-wd-cltwndid='+dat.sapwdcltwndid+'&sap-wd-norefresh=X&sap-wd-secure-id='+encodeURIComponent(dat.sapwdsecureid)+'&SAPEVENTQUEUE=ComboBox_Select%EE%80%82Id%EE%80%84aaaa.DocCompView.DropDownByIndex%EE%80%85Key%EE%80%84'+curso+'%EE%80%85ByEnter%EE%80%84false%EE%80%83%EE%80%82ClientAction%EE%80%84submit%EE%80%83%EE%80%82urEventName%EE%80%84COMBOBOXSELECTIONCHANGE%EE%80%83%EE%80%81Form_Request%EE%80%82Id%EE%80%84...form%EE%80%85Async%EE%80%84false%EE%80%85FocusInfo%EE%80%84%40%7B%22sFocussedId%22%3A%20%22aaaa.DocCompView.DropDownByIndex%22%7D%EE%80%85Hash%EE%80%84%EE%80%85DomChanged%EE%80%84false%EE%80%85IsDirty%EE%80%84false%EE%80%83%EE%80%82EnqueueCardinality%EE%80%84single%EE%80%83%EE%80%82%EE%80%83';
var options = {
    url:'http://portal.udp.cl/webdynpro/resources/sap.com/pb/PageBuilder',
	method: 'POST',
    headers: headers,
    body: dataString
};

function call(error, res, body) {
    if (!error && res.statusCode == 200) {

        var str= '<input type="text" name="CURS_CODIGO" value="';
        var len = str.length;
	var start=body.indexOf(str);
	var end=body.indexOf('" readonly>',start);
	 var code= body.substring(start+len, end);
	
	if(code.length >6 && code.length <13){
		dat.cursos[curso].id=code;
		dat.cursos[curso].status=true;
	}
callback(response,dat,curso+1,cookie);
    }
}

request(options, call);

};

