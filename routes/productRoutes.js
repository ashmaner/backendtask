const Product = require('../model/product')
const express = require('express')
const mongoose = require('mongoose')
const productRouter = express.Router()

productRouter.get('/', async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404).json({ message: 'Product Not Found' })
  }
})
productRouter.post('/', async (req, res) => {
  const { name, quantity } = req.body

  const result = await Product.create({
    name: name,
    quantity: quantity,
  })
  if (result) {
    res.json(result)
  } else {
    res.status(404).json({ message: 'Product Not Found' })
  }
})
productRouter.put('/', async (req, res) => {
  const { name, quantity } = req.params.id
  const result = await Product.findByIdAndUpdate({
    name: name,
    quantity: quantity,
  })

  if (result) {
    res.json(result, { new: true })
  } else {
    res.status(404).json({ message: 'Product Not Found' })
  }
})
productRouter.delete('/', async (req, res) => {
  const result = await Product.findByIdAndRemove(req.params.id)
  if (result) {
    res.json(result)
  } else {
    res.status(404).json({ message: 'Product Not Found' })
  }
})

module.exports = productRouter
