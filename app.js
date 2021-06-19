/*
- call `require` which is going to load the `fs module` (already built into Node)
- the return value of calling `require` is stored into the `fs variable`
- `fs.writeFileSync()` will write some text into a `notes.txt` file. 
- If the file does not exist, it will be created. 
- If the file exists, its text content will be overwritten by the new provided message.
*/

const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Enea.')
