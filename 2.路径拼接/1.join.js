const path = require('path')
    // const pathstr = path.join('/a', '/b/c', '../', './d', 'h')
    // ../会抵消一层
    // console.log(pathstr)


const fs = require('fs')
    // fs.readFile(__dirname + '/1.js文件/1.txt')
fs.readFile(path.join(__dirname, '/1.txt'), 'utf8',
    function(err, dataStr) {
        if (err) {
            return console.log(err.message)
        }
        console.log(dataStr)
    })