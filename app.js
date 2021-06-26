const validator = require('validator')

const getNotes = require('./notes')

const msg = getNotes()
console.log(msg)

console.log(validator.isEmail('enea@example.com'))
console.log(validator.isEmail('@example.com'))

console.log(validator.isURL('https://eneaxharja.com'))
console.log(validator.isURL('https/eneaxharja.com'))
