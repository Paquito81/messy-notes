const fs = require('fs');
const path = require('path');
const router = require('express').Router();

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'develop/public/index.html'));
});

app.get('/db', (req, res) => {
    res.sendFile(path.join(__dirname, 'develop/public/notes.html'));
});

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'develop/public/index.html'));
});
