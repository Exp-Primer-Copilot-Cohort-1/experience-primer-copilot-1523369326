// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = require('./comments');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.get('/comments/:id', (req, res) => {
    const id = Number(req.params.id);
    const comment = comments.find(comment => comment.id === id);
    res.json(comment);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

app.put('/comments/:id', (req, res) => {
    const id = Number(req.params.id);
    const comment = req.body;
    const index = comments.findIndex(comment => comment.id === id);
    comments[index] = comment;
    res.json(comment);
});

app.delete('/comments/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = comments.findIndex(comment => comment.id === id);
    comments.splice(index, 1);
    res.json(id);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


