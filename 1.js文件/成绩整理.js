const fs = require('fs')
fs.readFile('./成绩.txt', 'utf8', function(err, dataStr) {

    if (err) {
        return console.log('失败' + err.message)
    }

    // console.log('成功' + dataStr)

    //数据按空格进行分割
    const arr = dataStr.split(' ')

    //将等号换为 ：
    const arrnew = []
    arr.forEach(item => {
        arrnew.push(item.replace('=', ':'))
    })

    //拼接为新字符串
    const newstr = arrnew.join('\r\n')
        // console.log(newstr)

    fs.writeFile('./新成绩.txt', newstr, function(err) {
        console.log(err)
    })
})