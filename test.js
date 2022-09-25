
const express = require('express');
const body_parser = require('body-parser');
const app = express()
app.use(express.json());
app.use(body_parser.json());

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log('Hello World app successfully launched on port %s', port)
})

app.get('/hello', (req,res) =>{
    res.send('Hello');
})