//导入express
const express = require('express')
const app = express()


const mw = function(req, res, next) {
    console.log('最简单的中间函数')
    next()
}
app.use(mw)

app.get('/', (req, res) => {
    res.send('Home page.')
})

app.get('/user', (req, res) => {
    res.send('User page.')
})




//启动web服务器
app.listen(8080, () => {
    console.log('express sever running at http://127.0.0.1:8080')
})