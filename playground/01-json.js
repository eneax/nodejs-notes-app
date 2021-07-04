// ! JSON Playground
// JSON --> it's a string representation of what looks like a JS object or array

const fs = require('fs')

// JS object
// const book = {
//   title: 'Sapiens',
//   author: 'Yuval Noah Harari',
// }

// Convert JS object into JSON string
// const bookJSON = JSON.stringify(book)

// Save data into JSON file
// fs.writeFileSync('playground/01-json.json', bookJSON)

// Read file
// const dataBuffer = fs.readFileSync('playground/01-json.json')

// Buffer is a way for NodeJS to represent binary data
// Meaning that dataBuffer looks completely different from bookJSON
// console.log(dataBuffer)

// Convert buffer to string
// const dataJSON = dataBuffer.toString()
// console.log(dataJSON)

// Convert JSON string into JS object
// const data = JSON.parse(dataJSON)
// console.log(data)

// TODO: Challenge Time - Work with JSON and the file system

// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data
// 4. Test your work by viewing data in the JSON file

// * Solution

// Read file from system
const dataBuffer = fs.readFileSync('playground/01-json.json')
// Convert buffer to JSON string
const dataJSON = dataBuffer.toString()
// Convert JSON string to JS object
const user = JSON.parse(dataJSON)

// Change name and age property
user.name = 'Enea'
user.age = 99

// Convert JS object to JSON string
const userJSON = JSON.stringify(user)
// Write data to filesystem overwriting the original data
fs.writeFileSync('playground/01-json.json', userJSON)
