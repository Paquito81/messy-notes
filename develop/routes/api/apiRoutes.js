const router = require ('express').Router();
const { notes } = require('../../db/db')
//getting notes and sending them back as JSON
router.get('/db', req,res => {
    let results = db;
    if (req.query) {
    results = filterByQuery(req.query,noteData);
    }
    res.json(noteData);
});
//Creating a new note
router.post('/db', (req, res) => {
    req.body.id = db.length.tostring();

    if (!validateNote(req.body)) {
       res.status(400).send('No note to add.');

    } else {
        const note = createNewNote(req.body,db);
        res.json(noteData);
    }
});

module.exports = router;
