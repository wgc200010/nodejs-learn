// 自定义模块，默认module.exorts = {}
module.exports.username = 'asd'

const age = 20
module.exports.age = age

module.exports.say = function() {
    console.log('sdfdsffsdxzaaaa')
}

module.exports = {
    nickname: 'dsfxxxxxxxxds',
    say() {
        console.log('fdsgdfg')
    }
}

//其他文件的模块调用只是module.exorts = {}中的内容