const fs = require('fs')

fs, fs.readFile('./1.txt', 'utf8', function(err, dataStr) {
    if (err) {

        return console.log('失败' + err.message)
    }
    console.log('成功' + dataStr)
})