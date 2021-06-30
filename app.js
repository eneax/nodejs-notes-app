const chalk = require('chalk')
const getNotes = require('./notes')

/*
! argv
- it stays for argument vector
- in case of Node.js it's an array that contains all the arguments provided
- the array contains 3 strings and 2 of them are always provided
- the first string is the path to the Node.js executable on your machine
- the second string is that path to the app.js file 
- the third string is the value that we actually provided when running `node app.js Enea`
*/

console.log(process.argv)
console.log('name', process.argv[2])
