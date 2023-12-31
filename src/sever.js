
const express = require('express')
const app = express()
const port = 3000


app.set('views', './src/views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.render('sample.ejs')
})

app.get('/abc', (req, res) => {
    res.send('Hello abc!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})