const fs = require('fs')
const chalk = require('chalk')

const loadNotes = () => {
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

const saveNotes = (notes) => {
  // stringify data
  const dataJSON = JSON.stringify(notes)
  // save data to filesystem
  fs.writeFileSync('notes.json', dataJSON)
}

const addNote = (title, body) => {
  const notes = loadNotes()

  // filter runs for every item in the array
  const duplicateNotes = notes.filter((note) => note.title === title)

  // check for duplicate notes
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    })

    saveNotes(notes)
    console.log(chalk.green.inverse('New note added!'))
  } else {
    console.log(chalk.red.inverse('Note title taken!'))
  }
}

const removeNote = (title) => {
  const notes = loadNotes()

  // find and remove matching note
  const notesToKeep = notes.filter((note) => note.title !== title)

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
