const fs = require('fs')
const http = require('http')
const path = require('path')


//创建web服务器
const sever = http.createServer()
    //监听request事件
sever.on('request', (req, res) => {
        const url = req.url
        const fpath = path.join(__dirname, url) //拼接为具体路径
        fs.readFile(fpath, 'utf8', function(err, dataStr) {
            if (err) {
                return res.end('<h1>404 not found</h1>')
            }
            res.end(dataStr)
        })


        //直接输出中文会乱码
        //解决中文乱码
        // res.setHeader('Content-Type', 'text/html;charset=utf-8')
        //调用res
    }) //req为请求对象

sever.listen(8080, () => {
    console.log('sever running at http://127.0.0.1:8080')
})