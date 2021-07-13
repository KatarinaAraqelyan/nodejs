//1
// console.log(__filename)
// console.log(__filename.length)

//2
// const random = require('random')
// console.log(random.int(20,100))

//3
// const foo = require('../Modules/currentTime')
// foo.currentTime()

//4
// const foo = require('../Modules/wordsFromString')
// console.log(foo.wordsFromString("Hello #@jtj friend #kjnmltkn home bla %br"))

//5
// const foo = require('../Modules/char')
// foo.charOneSecondOutput("Hello")
// const argv = require('minimist')
const argv = require('minimist')(process.argv.slice(2))
console.log(argv)