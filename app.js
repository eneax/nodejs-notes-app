/*
- All the files in Node.js have their own scope with their own variables
- `app.js` cannot access the variable `name` defined inside `utils.js` (even if utils was loaded with `require`)
- If we want to use the content of a file inside another file, we need to explicitly export the content from a file
- We can export content using `modules.exports` and import it in another file using `require`
*/

// const firstName = require('./utils')

// console.log(firstName)

const add = require('./utils')

const sum = add(1, 1)
console.log(sum)
