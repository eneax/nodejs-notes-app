const chalk = require('chalk')
const getNotes = require('./notes')

const msg = getNotes()
console.log(msg)

const greenMsg = chalk.green('Success!')
console.log('greenMsg', greenMsg)

const greenBoldInvertedMsg = chalk.green.inverse.bold('Success!')
console.log('greenBoldInvertedMsg', greenBoldInvertedMsg)

const errorMsg = chalk.red.inverse.bold('Error!')
console.log('errorMsg', errorMsg)
