module.exports.wordsFromString = function (x) {
let str = x.split(" ")
let arr = []
let reg = /^[a-zA-Z0-9_.-]*$/;
for (let i of str) {
if (reg.test(i)) {
arr.push(i)
}
}
return arr;
}