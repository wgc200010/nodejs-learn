const path = require('path')

const fpath = '/a/b/c/index.html'

// const fullname = path.basename(fpath)
// console.log(fullname)//输出index.html

const namew = path.basename(fpath, '.html') //不显示.html
console.log(namew)