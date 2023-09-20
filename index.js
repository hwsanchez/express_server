const express = require('express') //require express module
const app = express() // calls the express function to start a new express app
const path = require('path')
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'about.html'))
})

app.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'contact.html'))
})

app.listen(3000, () => {
  console.log('App listening on port 3000...')
})
