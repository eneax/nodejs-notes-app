const chalk = require('chalk')
const getNotes = require('./notes')

const msg = getNotes()
console.log(msg)

//
// Use the chalk library in your project
//
// 1. Install the version 2.4.1 of chalk
// 2. Load chalk into your app
// 3. Use it to print the string "Success!" to the console in green
// 4. Test your work

// Bonus: Use the docs to mess around with other styles. Make text bold and inverted.

const greenMsg = chalk.green('Success!')
console.log('greenMsg', greenMsg)

const greenBoldInvertedMsg = chalk.green.inverse.bold('Success!')
console.log('greenBoldInvertedMsg', greenBoldInvertedMsg)
