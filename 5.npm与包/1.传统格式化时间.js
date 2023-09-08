function dateForm(dastr) {
    const dt = new Date(dastr)


    const y = dt.getFullYear()
    const m = padZero(dt.getMonth())
    const d = padZero(dt.getDate())

    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())


    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}


//补零函数
function padZero(n) {
    return n > 9 ? n : '0' + n
}


module.exports = {
    dateForm
}