const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
})

app.get('/cameron', (req, res) => {
    res.sendFile(__dirname + '/src/cameron.html')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
