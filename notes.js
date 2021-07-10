const fs = require('fs')
const chalk = require('chalk')

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

const removeNote = function (title) {
  const notes = loadNotes()

  // find and remove matching note
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title
  })

  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep)
    console.log(chalk.green.inverse(`${title} note removed!`))
  } else {
    console.log(chalk.red.inverse('No note found!'))
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
}
