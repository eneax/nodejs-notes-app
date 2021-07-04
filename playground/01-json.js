// ! JSON Playground
const fs = require('fs')

// JS object
const book = {
  title: 'Sapiens',
  author: 'Yuval Noah Harari',
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('playground/01-json.json', bookJSON)
