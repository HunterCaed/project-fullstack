const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors())

app.get('/test', (req, res) => {
    res.json({msg: 'Working in server.js again'}).status(200)
})

app.listen(3001, () => {
    console.log('Listening on port 3001');
})