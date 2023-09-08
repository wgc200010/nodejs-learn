// 1.导入fs木块
const fs = require('fs')
    // 2.调用fs。read file
    //参数一：路径，
    //参数二：读取文件编码格式，
    //参数三：回调函数，
fs.readFile('./1.txt', 'utf8', function(err, dataStr) {
    // 失败的结尾,成功此项为NULL
    console.log(err)
    console.log('---')
        //成功的结果
    console.log(dataStr)
})