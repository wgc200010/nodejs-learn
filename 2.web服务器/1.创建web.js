const http = require('http')
    //创建实例
const server = http.createServer()
    //绑定请求
server.on('request', function(req, res) {
    console.log('有人访问')
})

server.listen(8080, function() {
    console.log('sever running at http://127.0.0.1:8080')
})