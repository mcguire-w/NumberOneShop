const http = require('http');
const host = 'https://www.yhd.com';
http.createServer(function(req, res) {
    console.log(host + req.url);
    // 如果是ajax请求
        http.get(host + req.url, function(response) {
            var str = '';
            response.on('data', function(buffer) {
                str += buffer;
            })
            response.on('end', function() {
                res.writeHead(200, {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json'
                });
                res.end(str);
            })
        })
}).listen(8686)