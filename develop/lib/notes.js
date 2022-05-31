const fs = require('fs');
const path = ('path');

function creatingNewNotes(body, notesArray) {
    const notes = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, 'develop/db/db.json'),
        JSON.stringify({note:notesArray},null, 2)
    );

    return notes;
}