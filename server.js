const express = require('express');
const app = express();
const noteData = require('../../db/db.json')
const PORT = process.env.PORT || 3001;
const {db} = require()
const apiRoutes = require('./routes/api/apiRoutes');
const htmlRoutes = require('./routes/html/htmlRoutes')

app.use(express.json());
app.use(express.static('public'));




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