const fs = require('fs')
    //自动生成2.txt文件
fs.writeFile('./2.txt', 'sdfdsf', function(err) {
    console.log(err)
        //1.成功，err输出NULL
        //2.失败，err输出错误

})