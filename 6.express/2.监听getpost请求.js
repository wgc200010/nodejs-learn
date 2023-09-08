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


//启动web服务器
app.listen(8080, () => {
    console.log('express sever running at http://127.0.0.1:8080')
})