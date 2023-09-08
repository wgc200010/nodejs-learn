const http = require('http')
const sever = http.createServer()

sever.on('request', (req, res) => {
        const url = req.url
        const method = req.method
        const str = `你 request url is ${url} and request method is ${method}`
            //此处引号为tab键上方``，而不是引号
        console.log(str)



        //调用res
        res.end(str)


    }) //req为请求对象

sever.listen(8080, () => {
    console.log('sever running at http://127.0.0.1:8080')
})