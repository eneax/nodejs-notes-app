/*
- All the files in Node.js have their own scope with their own variables
- `app.js` cannot access the variable `name` defined inside `utils.js` (even if utils was loaded with `require`)
- If we want to use the content of a file inside another file, we need to explicitly export the content from a file
- We can export content using `modules.exports` and import it in another file using `require`
*/

// const firstName = require('./utils')

// console.log(firstName)

// const add = require('./utils')
// const sum = add(1, 1)
// console.log(sum)

//
// ! Challenge: Define and use a function in a new file
//
// 1. Create a new file called notes.js
// 2. Crete `getNotes` function that returns "Your notes..."
// 3. Export `getNotes` function
// 4. From app.js, load in and call the function printing message to console

const getNotes = require('./notes')

const msg = getNotes()
console.log(msg)
