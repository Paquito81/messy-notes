const express = require('express');
const app = express();
const noteData = require('./db/db.json')
const PORT = process.env.PORT || 3001;
const {db} = require()
app.use(express.json());
app.use(express.static('public'));

app.get('/api/db', req,res => {
    let results = db;
    if (req.query) {
    results = filterByQuery(req.query,noteData);
    }
    res.json(noteData);
});

app.post('/api/db', (req, res) => {
    req.body.id = db.length.tostring();

    if (!validateNote(req.body)) {
       res.status(400).send('Add to the note.');

    } else {
        const note = createNewNote(req.body,db);
        res.json(noteData);
    }
});


app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'develop/public/index.html'));
});

app.get('/db', (req, res) => {
    res.sendFile(path.join(__dirname, 'develop/public/notes.html'));
});

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'develop/public/index.html'));
});









app.listen(PORT, () => {
    console.log('API server now on port ${PORT}!');
});