var request = require('request');

var headers = {
    'Accept-Encoding': 'gzip, deflate, sdch',
    'Accept-Language': 'es-419,es;q=0.8',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Referer': 'http://portal.udp.cl/irj/portal',
    'Connection': 'keep-alive',
    'Cache-Control': 'max-age=0',
    'Cookie': 'com.sap.engine.security.authentication.original_application_url=GET#o2a%2BwhYhZl2jFEU6GtbDiyW09O0WDSbUBeDS2kD4%2BRpQYfKCv9H5EC3mTWShhcPxq32PC5VWQDUj1KVxArYry8%2BgGzgFmhLm; __utma=198488683.742929716.1488367719.1488367719.1488367719.1; __utmz=198488683.1488367719.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); _ga=GA1.2.742929716.1488367719; JSESSIONID=M4HzGgb5RCD3Mdu0xcOtsQFlKDMUXAG3bWMA_SAPH6auZM29MZcxi4WPBCrrD7Qy; SAPWP_active=1; saplb_*=(J2EE6516120)6516152; JSESSIONMARKID=ENb9aA9O0UsdDydtBZOTHKMTzgyGNcaLgSRLhtYwA; PortalAlias=portal'
};

var options = {
    url: 'http://portal.udp.cl/irj/portal',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);
