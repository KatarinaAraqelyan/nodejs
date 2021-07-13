module.exports.charOneSecondOutput = function(x) {
    let str = Array.from(x)
    setTimeout(function () {
        for (let i = 0; i < str.length; i++) {
            setTimeout(function () {
                console.log(str[i])
            }, 1000 * i)
        }
    },1000)
}
