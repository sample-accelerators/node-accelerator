const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello from the server!')
})

app.get('/health', (req, res) => {
  res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})