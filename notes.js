const fs = require('fs')

const getNotes = function () {
  return 'Your notes...'
}

const loadNotes = function () {
  try {
    // load existing notes
    const dataBuffer = fs.readFileSync('notes.json')
    // convert buffer into a string
    const dataJSON = dataBuffer.toString()
    // parse JSON (convert JSON string into JS object)
    return JSON.parse(dataJSON)
  } catch (error) {
    // if there is no notes file, start with an empty array
    return []
  }
}

const saveNotes = function (notes) {
  // stringify data
  const dataJSON = JSON.stringify(notes)
  // save data to filesystem
  fs.writeFileSync('notes.json', dataJSON)
}

const addNote = function (title, body) {
  const notes = loadNotes()

  notes.push({
    title: title,
    body: body,
  })

  saveNotes(notes)
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
}
