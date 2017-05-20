var request = require('request');

var headers = {
    'Origin': 'http://portal.udp.cl',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'es-ES,es;q=0.8',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.96 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': '*/*',
    'Referer': 'http://portal.udp.cl/webdynpro/resources/sap.com/pb/PageBuilder;jsessionid=u_YmYVJIseyoOvJ3UK7hsL_WmHAUXAHrwjkA_SAP',
    'X-Requested-With': 'XMLHttpRequest',
    'Connection': 'keep-alive',
    'Cookie': 'JSESSIONID=Z8dRnjcjLLuxdB995N0IjJiS6DUoXAFQwzkA_SAPNWd8zC0x0otz5i40_9NyfSZW;saplb_*=(J2EE3785420)3785451; MYSAPSSO2=AjExMDAgABBwb3J0YWw6MTgwMjA2Nzc5iAATYmFzaWNhdXRoZW50aWNhdGlvbgEACTE4MDIwNjc3OQIAAzAwMAMAA0VQUAQADDIwMTcwNTIwMjMzNAUABAAAAAgKAAkxODAyMDY3Nzn%2FAQUwggEBBgkqhkiG9w0BBwKggfMwgfACAQExCzAJBgUrDgMCGgUAMAsGCSqGSIb3DQEHATGB0DCBzQIBATAiMB0xDDAKBgNVBAMTA0VQUDENMAsGA1UECxMESjJFRQIBADAJBgUrDgMCGgUAoF0wGAYJKoZIhvcNAQkDMQsGCSqGSIb3DQEHATAcBgkqhkiG9w0BCQUxDxcNMTcwNTIwMjMzNDAwWjAjBgkqhkiG9w0BCQQxFgQUGHDi080VEKt6ejLjy4nbrK1!!1AwCQYHKoZIzjgEAwQvMC0CFDW1GYC9ne4FVsfdbyxb3ZeskbUGAhUA0hbBU6GzSkWgR!KJjx%2FEFiTa61E%3D; JSESSIONMARKID=RgI4MgErp7SP8OZ4vOptuDvGUhR72YBJSQdFDDOQA; PortalAlias=portal; SAPWP_active=1'

};

var dataString = 'sap-ext-sid=mNXWqufgK6eki1zFhcqrHg--mtJW2rAHGuKGvox_YdLnsA--&sap-wd-cltwndid=WID1495309683210&sap-wd-norefresh=X&sap-wd-secure-id=Ec7MZpCDgcgNMkkSb91cZw%3D%3D&SAPEVENTQUEUE=ComboBox_Select%EE%80%82Id%EE%80%84aaaa.DocCompView.DropDownByIndex%EE%80%85Key%EE%80%840%EE%80%85ByEnter%EE%80%84false%EE%80%83%EE%80%82ClientAction%EE%80%84submit%EE%80%83%EE%80%82urEventName%EE%80%84COMBOBOXSELECTIONCHANGE%EE%80%83%EE%80%81Form_Request%EE%80%82Id%EE%80%84...form%EE%80%85Async%EE%80%84false%EE%80%85FocusInfo%EE%80%84%40%7B%22sFocussedId%22%3A%20%22aaaa.DocCompView.DropDownByIndex%22%7D%EE%80%85Hash%EE%80%84%EE%80%85DomChanged%EE%80%84false%EE%80%85IsDirty%EE%80%84false%EE%80%83%EE%80%82EnqueueCardinality%EE%80%84single%EE%80%83%EE%80%82%EE%80%83';
dataString= 'sap-ext-sid=bY9wKxaQHPtfrSGPQwW0xQ--7Pddc4zJpaTXA95vxqOs1g--&sap-wd-cltwndid=WID1495231899808&sap-wd-norefresh=X&sap-wd-secure-id=tTyD_i1v8bBVHjjCvO850Q%3D%3D&SAPEVENTQUEUE=ComboBox_Select%EE%80%82Id%EE%80%84aaaa.DocCompView.DropDownByIndex%EE%80%85Key%EE%80%840%EE%80%85ByEnter%EE%80%84false%EE%80%83%EE%80%82ClientAction%EE%80%84submit%EE%80%83%EE%80%82urEventName%EE%80%84COMBOBOXSELECTIONCHANGE%EE%80%83%EE%80%81Form_Request%EE%80%82Id%EE%80%84...form%EE%80%85Async%EE%80%84false%EE%80%85FocusInfo%EE%80%84%40%7B%22sFocussedId%22%3A%20%22aaaa.DocCompView.DropDownByIndex%22%7D%EE%80%85Hash%EE%80%84%EE%80%85DomChanged%EE%80%84false%EE%80%85IsDirty%EE%80%84false%EE%80%83%EE%80%82EnqueueCardinality%EE%80%84single%EE%80%83%EE%80%82%EE%80%83';
var options = {
    url: 'http://portal.udp.cl/webdynpro/resources/sap.com/pb/PageBuilder',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
        console.log(response.statusCode);
    if (!error && response.statusCode == 200) {
    }
}

request(options, callback);

