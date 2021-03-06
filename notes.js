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

  // check for duplicate notes
  const duplicateNote = notes.find((note) => note.title === title)

  if (!duplicateNote) {
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

const listNotes = () => {
  const notes = loadNotes()

  console.log(chalk.yellow.inverse('Your notes'))

  notes.forEach((note) => {
    console.log(note.title)
  })
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)

  if (note) {
    console.log(chalk.yellow.inverse(note.title))
    console.log(note.body)
  } else {
    console.log(chalk.red.inverse('Note not found!'))
  }
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
}
