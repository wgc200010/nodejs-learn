const http = require('http')
const sever = http.createServer()

sever.on('request', (req, res) => {
        const url = req.url
        let content = '<h1>404 Not Found</h1>'
            // const str = `你请求地址 ${url} 请求方式 ${method}`
            //     //此处引号为tab键上方``，而不是引号
            // console.log(str)
        if (url === '/' || url === '/index.html') {
            content = '<h1>首页</h1>'
        } else if (url === '/about.html') {
            content = '<h1>关于</h1>'
        }


        //直接输出中文会乱码
        //解决中文乱码
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
            //调用res
        res.end(content)
    }) //req为请求对象

sever.listen(8080, () => {
    console.log('sever running at http://127.0.0.1:8080')
})