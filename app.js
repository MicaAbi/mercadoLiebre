const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () => console.log('Server up'));

const public = path.join(__dirname, './public');
app.use(express.static(public));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
});