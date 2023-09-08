//导入express
const express = require('express')
const app = express()

//监听get,post
app.get('/user', (req, res) => {
    //调用express提供的res.send方法
    res.send({
        name: 'sad',
        age: 32,
        gender: '萨达'
    })
})

app.post('/user', (req, res) => {
    res.send('请求成功')
})

//url参数
app.get('/', (req, res) => {
    //通过req.query获得客户端发送过来的参数
    //一般情况下，req.query是空对象
    console.log(req.query)
    req.send(req.query)
})


//:id动态参数
app.get('/user/:id', (req, res) => {
    console.log(req.params)
    res.send(req.params)
})

//启动web服务器
app.listen(80, () => {
    console.log('express sever running at http://127.0.0.1')
})