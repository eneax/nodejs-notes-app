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

  // filter runs for every item in the array
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title
  })

  // check for duplicate notes
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    })

    saveNotes(notes)
    console.log('New note added!')
  } else {
    console.log('Note title taken!')
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
}
