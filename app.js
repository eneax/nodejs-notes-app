/*
- call `require` which is going to load the `fs module` (already built into Node)
- the return value of calling `require` is stored into the `fs variable`
- `fs.writeFileSync()` will write some text into a `notes.txt` file. 
- If the file does not exist, it will be created. 
- If the file exists, its text content will be overwritten by the new provided message.
*/

const fs = require('fs')

// fs.writeFileSync('notes.txt', 'My name is Enea.')

//
// Challenge: Append a message to notes.txt
//
// 1. Use appendFileSync to append to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text

fs.appendFileSync('notes.txt', '\nMy last name is Xharja.')
