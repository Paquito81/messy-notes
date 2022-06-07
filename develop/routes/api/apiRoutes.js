const router = require('express').Router();
const fs = require('fs');
const { notes } = require('develop/db/db.json');
let noteData = require('../../db/db.json');
const {uniqid} = require('uniqid');
//getting notes and sending them back as JSON
router.get('/api/notes', (req, res) => {
    // let results = db;
    noteData = JSON.parse(fs.readFileSync('develop/db/db.json', 'UTF-8'))
    // if (req.query) {
    // results = filterByQuery(req.query,notes);
    // }
    res.json(noteData);
});
//Creating a new note

router.post('/api/notes', (req, res) => {
    const nota = noteData(req.body, notes);
    res.json(nota);
});

router.post('/notes', (req, res) => {
    req.body.id = db.length.toString();

    if (!validateNote(req.body)) {
       res.status(400).send('No note to add.');

    } else {
        const note = createNewNote(req.body, notes);
        res.json(notes);
    }
});

//deleting notes
router.delete('/api/notes/:id', (req, res) => {
    const contain = []
    for (var i = 0; i < noteData.length; i++) {
        if (noteData[i].id !=req.params.id) {
            contain.push(noteData[i])
        }
    }
    noteData = contain;
    fs.writeFileSync('develop/db/db.json', JSON.stringify(noteData))

    res.json(noteData)
});

//Deleting notes
// router.delete('/notes/:id', (req, res) => {
//     res.json()

// });

module.exports = router;
