const TIME = require('./1.传统格式化时间')


const dt = new Date()
console.log(dt)

const newdt = TIME.dateForm(dt)
console.log(newdt)