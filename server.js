const express = require('express')
const mongoose = require('mongoose')
const productRouter = require('./routes/productRoutes')
const productSchema = require('./model/product')

const app = express()

mongoose
  .connect(
    'mongodb+srv://ashish:EZJQO9Gd3YvPpUTs@cluster0.s7mwwxn.mongodb.net/?retryWrites=true&w=majority',
  )
  .then(() => {
    console.log('database connected')
  })
  .catch(() => {
    console.log('err')
  })

//middlewares
app.use(express.json())

// //route
app.use('product', productRouter)

app.get('/', (req, res) => {
  res.send('<h1>Hello From Node Server vai nodemon</h1>')
})

app.listen(8000, () => {
  console.log('server is  running on port 8000')
})
