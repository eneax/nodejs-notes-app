// ! JSON Playground
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
const dataBuffer = fs.readFileSync('playground/01-json.json')

// Buffer is a way for NodeJS to represent binary data
// Meaning that dataBuffer looks completely different from bookJSON
// console.log(dataBuffer)

// Convert buffer to string
const dataJSON = dataBuffer.toString()
// console.log(dataJSON)

// Convert JSON string into JS object
const data = JSON.parse(dataJSON)
console.log(data)
