const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const {db} = require()

app.get('/api/db', req,res => {
    let results = db;
    if (req.query) {
    results = filterByQuery(req.query, results);
    }
    res.json(results);
});

app.post('/api/db', (req, res) => {
    req.body.id = db.length.tostring();

    if (!validateNote(req.body)) {
       res.status(400).send('Add to the note.');

    } else {
        const note = createNewNote(req.body,db);
        res.json(note);
    }
});









app.listen(PORT, () => {
    console.log('API server now on port ${PORT}!');
});