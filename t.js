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
    'Cookie': '__utma=198488683.742929716.1488367719.1488367719.1488367719.1; __utmz=198488683.1488367719.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); _ga=GA1.2.742929716.1488367719; JSESSIONID=M4HzGgb5RCD3Mdu0xcOtsQFlKDMUXAG3bWMA_SAPH6auZM29MZcxi4WPBCrrD7Qy; saplb_*=(J2EE6516120)6516150; MYSAPSSO2=AjExMDAgABBwb3J0YWw6MTgwMjA2Nzc5iAATYmFzaWNhdXRoZW50aWNhdGlvbgEACTE4MDIwNjc3OQIAAzAwMAMAA0VQUAQADDIwMTcwNTE3MDU1NAUABAAAAAgKAAkxODAyMDY3Nzn%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0VQUDENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMTcwNTE3MDU1NDMxWjAjBgkqhkiG9w0BCQQxFgQUsMuki4JScBw%2Fj33Q8W5QrL1xKlYwCQYHKoZIzjgEAwQvMC0CFQCcCwMUg21opT!Q0Jr%2Ff4lZ5bbyZwIUYWkq45tgjqwytiJFeOUMzTm4ghY%3D; JSESSIONMARKID=bm8hLAQkBFJao4G4dkXf-hydHCViEZJ_gBT7ZtYwA; PortalAlias=portal; SAPWP_active=1'
};

var dataString = 'sap-ext-sid=Qpb8zKcmmGBbeGQSF4dEaQ--WpknMQozTxk4VxwqbE4XZg--&sap-wd-cltwndid=WID1495000471394&sap-wd-tstamp=1495001307384&PagePath=pcd%3Aportal_content%2Fpc_udp%2Fstudents%2FUDP_student%2Fportal_st_udp%2Fst_mydata%2Fhome%2FMyDataApp&sap-wd-app-namespace=zzzz&sap-ep-version=7.40.201304112106&sap-locale=es_419&sap-accessibility=&sap-rtl=&sap-explanation=null&sap-cssurl=http%3A%2F%2Fportal.udp.cl%3A80%2Fcom.sap.portal.design.urdesigndata%2Fthemes%2Fportal%2Fudp_gray%2Fls%2Fls_sf3.css%3Fv%3D7.33.3.24.1&sap-cssversion=7.33.3.24.0&sap-epcm-guid=4E93D24EBE27DF20133AF3D62D46401BBA6A632FE4A48FAF43E1A8BDDBF69B7C&com.sap.portal.reserved.wd.pb.restart=false&DynamicParameter=&SerWinIdString=%26&NavigationTarget=pcd%3Aportal_content%2Fpc_udp%2Fstudents%2FUDP_student%2Fportal_st_udp%2Fst_mydata%2Fhome&NavMode=0&HistoryMode=2&PrevNavTarget=navurl%3A%2F%2F73123621b8341c30a4d2aefff9ba0892';

var options = {
    url: 'http://portal.udp.cl/webdynpro/resources/sap.com/pb/PageBuilder;jsessionid=M4HzGgb5RCD3Mdu0xcOtsQFlKDMUXAG3bWMA_SAP',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
