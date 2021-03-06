const express = require('express');
const app = express();
const apiRoutes = require('develop/routes/api/apiRoutes.js');
const htmlRoutes = require('../routes/html/htmlRoutes');
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true }));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// app.listen(PORT, function() {
//     console.log('API server is on port ${PORT}');
// });

app.listen(PORT, () => {
    console.log('API server now on port ${PORT}!');
});