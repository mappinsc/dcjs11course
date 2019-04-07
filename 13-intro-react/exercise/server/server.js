const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const api = require('./api.js')
const db = require('./db.js')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/:search', (req, res) => {
  const searchText = req.params.search
  api.searchGifs(searchText).then(r => {
    const data = JSON.parse(r).data
    res.render('gif-list', {gifs: data})
  })
})

app.listen(4000, () => {
  console.log('listening on port 4000')
})
