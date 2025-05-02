const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Digital Ocean Server!');
});

app.listen(3000);