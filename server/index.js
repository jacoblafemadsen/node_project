//port 3005
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const fN = require('./controller')
const PORT = 3005

app.use(bodyParser.json())

app.get('/api/images', fN.getAll)

app.post('/api/images', fN.postCard)

app.delete('/api/images/:id', fN.delImg)

app.put('/api/images/:id', fN.editImg)

app.listen(PORT, () => console.log('Listening always listening -_-'))