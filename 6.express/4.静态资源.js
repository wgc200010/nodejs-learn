const express = require('express')

const app = express()

//clock文件为静态资源
//调用static
app.use(express.static('./clock'))



app.listen(8080, () => {
    console.log('express sever running at http://127.0.0.1:8080')
})