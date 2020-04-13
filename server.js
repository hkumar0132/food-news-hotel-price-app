const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.listen(8000, () => {
    console.log('Server started!')
})

app.route('/api/cats').get((req, res) => {
    res.send({
        cats: [{ name: 'lilly' }, { name: 'lucy' }],
      })
})

app.route('/api/cats/:name').get((req, res) => {
    const requestedCatName = req.params['name']
    res.send({ name: requestedCatName })
})

const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.route('/api/cats').post((req, res) => {
  res.send(201, req.body)
})

app.route('/api/cats/:name').put((req, res) => {
    res.send(200, req.body)
})





