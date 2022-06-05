const router = require ('express').Router();
const { notes } = require('develop/db/db.json')
//getting notes and sending them back as JSON
router.get('/api/notes', req,res => {
    let results = db;
    if (req.query) {
    results = filterByQuery(req.query,notes);
    }
    res.json(noteData);
});
//Creating a new note
router.post('/api/notes', (req, res) => {
    req.body.id = db.length.toString();

    if (!validateNote(req.body)) {
       res.status(400).send('No note to add.');

    } else {
        const note = createNewNote(req.body, notes);
        res.json(notes);
    }
});

//Deleting notes
// router.delete('/notes/:id', (req, res) => {
//     res.json()

// });

module.exports = router;
