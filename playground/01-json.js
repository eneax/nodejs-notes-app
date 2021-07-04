// ! JSON Playground

// JS object
const book = {
  title: 'Sapiens',
  author: 'Yuval Noah Harari',
}

// Convert JS object into JSON string (book object becomes bookJSON string)
const bookJSON = JSON.stringify(book)
console.log(bookJSON)

// Convert JSON string into a JS object
const parsedData = JSON.parse(bookJSON)
console.log(parsedData)
console.log('title: ', parsedData.title)
console.log('author: ', parsedData.author)
