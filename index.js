const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    return res.send('Hello gg');
});

app.listen(3000);