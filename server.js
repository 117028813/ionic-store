const express = require('express')
const app = express()
const fs = require('fs')

app.get('/list', (req, res) => {
  res.set({
    'Access-Control-Allow-Origin': '*'
  })

  fs.readFile('./data.txt', 'utf-8', (err, data) => {
    res.send(data)
  })
})

app.listen(3000, () => {
  console.log('http://192.168.1.218:3000')
})