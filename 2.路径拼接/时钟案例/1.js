const fs = require('fs')
const { resolve } = require('path')

const path = require('path')

//匹配style
const regstyle = /<style>[\s\S]*<\/style>/


//匹配script
const regscript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join((__dirname, './index.html')), 'utf8', function(err, dataStr) {
    if (err)
        return console.log('失败' + err.message)
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})


//定义resloveCSS方法]
function resolveCSS(htmlstr) {
    const r1 = regstyle.exec(htmlstr)
        // console.log(r1)

    const newcss = r1[0].replace('<style>', ' ').replace('</style>', ' ')
        // console.log(newcss)

    fs.writeFile(path.join(__dirname, 'index.css'), newcss, function(err) {
        if (err)
            return console.log('失败' + err.message)
    })
}

//定义reslovejs方法]
function resolveJS(htmlstr) {
    const r2 = regscript.exec(htmlstr)
        // console.log(r1)

    const newjs = r2[0].replace('<script>', ' ').replace('</script>', ' ')
        // console.log(newcss)

    fs.writeFile(path.join(__dirname, 'index.js'), newjs, function(err) {
        if (err)
            return console.log('失败' + err.message)
    })
}

//定义resolvehtml
function resolveHTML(htmlstr) {

    const r3 = htmlstr.replace(regstyle, '<link rel="stylesheet" href="index.css">').replace(regscript, ' <script src="index.js"></script>')

    fs.writeFile(path.join(__dirname, 'newindex.html'), r3, function(err) {
        if (err)
            return console.log('失败' + err.message)
    })
}